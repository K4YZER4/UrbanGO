import { StyleSheet, View, StatusBar, Image } from "react-native";
import { Mascota, BotonLink } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../themes/colors";
import { useWindowDimensions } from "react-native"; // Hook de React Native que devuelve las dimensiones actuales de la pantalla.
// Esto permite que la UI se adapte dinámicamente al tamaño del dispositivo.

export default function App() {
  const { height } = useWindowDimensions();
  // Creamos los estilos dentro del componente porque necesitamos "height"
  // para calcular el padding relativo de la sección superior.
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
      // Usamos un valor relativo (18% de la altura de pantalla) en vez de un fijo,
      // así se adapta mejor a distintos dispositivos.
      paddingBottom: height * 0.18,
    },

    botones: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.fondoClaro,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 40,
      justifyContent: "center",
    },
  });

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
          colors={[colors.degradadoInicio, colors.degradadoFin]}
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
