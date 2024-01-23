import React from "react";
import AppLoading from "expo-app-loading";

import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  // ! = enquanto essas fonts não carregaram, então eu não quero que meu app seja aberto. Deixando a splash em loading
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Background>
      {/* Muda a cor da bar do celular */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
