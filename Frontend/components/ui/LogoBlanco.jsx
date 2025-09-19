import { View, Image, StyleSheet } from "react-native";
import { LogoBlanco as LogoBlancoImg } from "../../assets";

function LogoBlanco() {
  return (
    <View style={styles.contenedor}>
      <Image style={styles.imagen} source={LogoBlancoImg} />
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

export default LogoBlanco;
