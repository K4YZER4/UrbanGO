import { Redirect } from "expo-router";

export default function Index() {
  const tieneCuenta = false; // Aqui despues va la logica para saber si el usuario ya tiene cuenta o no
  return <Redirect href={tieneCuenta ? "/main" : "/log"} />; // Si el usuario no tiene cuenta lo manda a la pantalla de login, si ya tiene una cuenta lo manda a la carpeta main donde va a estar toda la app
}
