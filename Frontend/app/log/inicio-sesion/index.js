import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function InicioSesion() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Inicio de sesion</Text>
      {/* Boton para ir a recuperar contraseña */}
      <Link href="/log/recuperar-contrasena" asChild>
        <TouchableOpacity style={styles.boton}>
          <Text>¿Olvidaste tu contraseña?</Text>
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
    color: "#fff",
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
