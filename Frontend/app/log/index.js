import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>UrbanGODDDDDD</Text>
      <StatusBar style="auto" />

      {/* Botón para ir al inicio de sesion */}
      {/* El asChild se usa para que el boton herede los comportamientos del link */}
      {/* En el href va la ruta de el archivo al que se quiere dirigir */}
      <Link href="/log/inicio-sesion" asChild>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </Link>

      {/* Botón para ir al registro */}
      <Link href="/log/registro" asChild>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.buttonText}>Registro</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "#fff",
    fontSize: 20,
  },
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    backgroundColor: "#61dafb",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
});
