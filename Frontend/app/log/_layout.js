import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // ocultamos headers
        contentStyle: { backgroundColor: "#282c34" }, // fondo uniforme
      }}
    />
  );
}
