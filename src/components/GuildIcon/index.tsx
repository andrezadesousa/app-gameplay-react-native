import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = 'https://cdn.discordapp.com/icons/1011033854678348288/5b9a0d0b-0d7f-4b5b-8d3e-6b7b7f7f7f7f.png';
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
