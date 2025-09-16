import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Mascota, BotonLink } from "../../components";

export default function App() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.top}>
        <Mascota />
      </View>

      {/* Botón para ir al inicio de sesion */}
      {/* El asChild se usa para que el boton herede los comportamientos del link */}
      {/* En el href va la ruta de el archivo al que se quiere dirigir */}

      <View style={styles.botones}>
        <BotonLink href="/log/inicio-sesion" texto="Iniciar sesión" />
        <BotonLink href="/log/registro" texto="Crear cuenta" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#4facfe",
  },
  top: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  botones: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: "center",
  },
});

// const styles = StyleSheet.create({
//   texto: {
//     color: "#fff",
//     fontSize: 20,
//   },
//   contenedor: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   boton: {
//     backgroundColor: "#61dafb",
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginVertical: 10,
//   },
// });
