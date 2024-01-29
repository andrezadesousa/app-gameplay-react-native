import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Avatar } from "../Avatar";
type MemberProps = {
  id: string;
  name: string;
  avatar_url: string;
  status: string;
};

export type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === "online";

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: data.status === "online" ? on : primary,
              },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
