import psycopg2
from dotenv import load_dotenv
import os
from datetime import datetime
import sys

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

# Conectar a la base de datos urbango_db
try:
    conn_urbango = psycopg2.connect(
        host=os.getenv("URBANGO_DB_HOST"),
        dbname=os.getenv("URBANGO_DB_NAME"),
        user=os.getenv("URBANGO_DB_USER"),
        password=os.getenv("URBANGO_DB_PASSWORD")
    )
    cur_urbango = conn_urbango.cursor()
    print("Conexión a la base de datos establecida.")
except Exception as e:
    print(f"Error al conectar a la base de datos de urbango_db: {e}")
    sys.exit(1)

# Función para procesar las posiciones
def procesar_posiciones():
    try:
        # 1. Obtener la última posición procesada para evitar duplicados
        #    Esto es una mejora. Si tu tabla urb_ruta_posicion está vacía, iniciará desde el principio.
        cur_urbango.execute("SELECT MAX(hora) FROM urb_ruta_posicion")
        last_processed_time = cur_urbango.fetchone()[0]

        # 2. Buscar nuevas posiciones en la tabla tc_positions
        #    Se asume que tc_positions también está en urbango_db.
        if last_processed_time:
            query_posiciones = "SELECT deviceid, latitude, longitude, devicetime FROM tc_positions WHERE devicetime > %s ORDER BY devicetime ASC;"
            cur_urbango.execute(query_posiciones, (last_processed_time,))
        else:
            query_posiciones = "SELECT deviceid, latitude, longitude, devicetime FROM tc_positions ORDER BY devicetime ASC;"
            cur_urbango.execute(query_posiciones)
            
        posiciones_traccar = cur_urbango.fetchall()

        if not posiciones_traccar:
            print("No hay nuevas posiciones para procesar.")
            return

        print(f"Procesando {len(posiciones_traccar)} nuevas posiciones...")

        for pos in posiciones_traccar:
            deviceid, lat, lon, hora_posicion = pos
            
            # 3. Buscar la ruta activa para esta posición
            query_ruta_activa = """
            SELECT re.idRutaEjecutada
            FROM urb_ruta_ejecutada re
            JOIN urb_camion_dispositivo cd ON re.idCamion = cd.idCamion
            WHERE cd.idDevice = %s
            AND re.fecha = %s
            AND re.horaInicio <= %s;
            """
            cur_urbango.execute(query_ruta_activa, (deviceid, hora_posicion.date(), hora_posicion.time()))
            resultado = cur_urbango.fetchone()
            
            if resultado:
                id_ruta_ejecutada = resultado[0]
                
                # 4. Insertar la posición en tu tabla urb_ruta_posicion
                query_insert = """
                INSERT INTO urb_ruta_posicion (idRutaEjecutada, latitud, longitud, hora)
                VALUES (%s, %s, %s, %s)
                ON CONFLICT DO NOTHING;
                """
                cur_urbango.execute(query_insert, (id_ruta_ejecutada, lat, lon, hora_posicion))
                print(f"Posición guardada para la ruta {id_ruta_ejecutada}")
            # else:
            #   print(f"No se encontró una ruta activa para la posición de dispositivo {deviceid}")

        conn_urbango.commit()
        print("Sincronización de datos completada.")

    except Exception as e:
        conn_urbango.rollback() # Si hay un error, revierte la transacción
        print(f"Error durante el procesamiento: {e}")

    finally:
        # Cierra la conexión
        cur_urbango.close()
        conn_urbango.close()

# Ejecuta la función
if __name__ == "__main__":
    procesar_posiciones()