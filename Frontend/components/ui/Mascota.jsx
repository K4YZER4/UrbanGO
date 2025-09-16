import { View, Image, StyleSheet } from "react-native";

function Mascota() {
  return (
    <View style={styles.contenedor}>
      <Image
        style={styles.imagen}
        source={require("../../assets/Mascota.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  imagen: {
    width: 220,
    height: 220,
  },
});

export default Mascota;
