import { StyleSheet, View, StatusBar, Image } from "react-native";
import { Mascota, BotonLink } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoBlanco from "../../assets/Mascota.png";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
        {/* Fondo degradado absoluto */}
        <LinearGradient
          colors={["#298bf4ff", "#9adff0ff"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        {/* Contenido */}
        <View style={styles.top}>
          <Mascota />
        </View>

        <View style={styles.botones}>
          <BotonLink href="/log/inicio-sesion" texto="Iniciar sesión" />
          <BotonLink href="/log/registro" texto="Crear cuenta" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 180,
  },

  botones: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
    justifyContent: "center",
  },
});
