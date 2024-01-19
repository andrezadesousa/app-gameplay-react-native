import React from "react";
import { styles } from "./styles";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";

import DiscordImg from "../../assets/discord.png";

export function ButtonIcon() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        Entrar com Discord
      </Text>
    </TouchableOpacity>
  );
}
