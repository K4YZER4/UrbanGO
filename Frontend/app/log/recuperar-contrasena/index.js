import { StyleSheet, View, Text } from "react-native";

function RecuperarContraseña() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Recuperar contraseña</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 20,
  },
});

export default RecuperarContraseña;
