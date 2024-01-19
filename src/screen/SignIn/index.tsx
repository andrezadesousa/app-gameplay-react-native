import React from "react";
import { styles } from "./styles";
import { View, Text, Image, StatusBar } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

import { ButtonIcon } from "../../components/Buttonicon";

export function SignIn() {
  return (
    <View style={styles.container}>
      {/* Muda a cor da bar do celular */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon />

      </View>
    </View>
  );
}
