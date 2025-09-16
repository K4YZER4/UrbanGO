import { Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

function BotonLink({ href, texto }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.boton}>
        <Text style={styles.texto}>{texto}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    fontWeight: "bold",
  },
});

export default BotonLink;
