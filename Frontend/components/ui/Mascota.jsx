import { View, Image, StyleSheet } from "react-native";

function Mascota() {
  return (
    <View style={styles.contenedor}>
      <Image
        style={styles.imagen}
        source={require("../../assets/LogoBlanco.png")}
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
    width: 380,
    height: 380,
  },
});

export default Mascota;
