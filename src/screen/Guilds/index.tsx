import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
};
export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários", 
      icon: "image.png",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Guild data={item} onPress={() => handleGuildSelect(item)} />}
        showsHorizontalScrollIndicator={false}
        style={styles.guilds}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </View>
  );
}
