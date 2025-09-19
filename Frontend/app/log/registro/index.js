import { StyleSheet, View, Text, StatusBar, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../../themes/colors";
import { LogoBlanco, BotonLink } from "../../../components";
import { useWindowDimensions } from "react-native";
import React, { useState } from "react";

function Registro() {
  const [numero, onChangeNumber] = React.useState("");
  // const [numero, onChangeNumber] = React.useState("");

  const { height } = useWindowDimensions();
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
      paddingBottom: height * 0.22,
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
    texto: {
      fontSize: 30,
      textAlign: "center",
      marginBottom: 10,
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
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
        <LinearGradient
          colors={[colors.degradadoInicio, colors.degradadoFin]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        <View style={styles.top}>
          <LogoBlanco />
        </View>

        <View style={styles.botones}>
          <Text style={styles.texto}>Comencemos</Text>
          <BotonLink href="" texto="Ingresa tu número" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={numero}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
        {/* <View style={styles.contenedor}>
          <Text style={styles.texto}>Registro</Text>
        </View> */}
      </SafeAreaView>
    </>
  );
}

export default Registro;
