import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { ImageBackground, Text, View, FlatList } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import BannerPng from "../../assets/banner.png";

import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/Buttonicon";

export function AppointmentDetails() {
  const menbers = [
    {
      id: "1",
      name: "Bruna Silveira",
      avatar_url: "https://github.com/brunasilveira.png",
      status: "online",
    },
    {
      id: "2",
      name: "Bruna Silveira",
      avatar_url: "https://github.com/brunasilveira.png",
      status: "offline",
    },
    {
      id: "3",
      name: "Bruna Silveira",
      avatar_url: "https://github.com/brunasilveira.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={menbers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
