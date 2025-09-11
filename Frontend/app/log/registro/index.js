import { StyleSheet, View, Text } from "react-native";

function Registro() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Registro</Text>
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

export default Registro;
