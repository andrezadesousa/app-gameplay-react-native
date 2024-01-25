import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";

import { styles } from "./styles";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
};

export type AppointmentProps = {
  id: string;
  guild: {
    name: string;
    icon: string | null;
    id: string;
  };
  category: string;
  date: string;
  description: string;
};

type Props = RectButton & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
