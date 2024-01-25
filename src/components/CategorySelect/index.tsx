import React from "react";
import { ScrollView } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { theme } from "../../global/styles/theme";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void; //o setCategory é uma função e ele tem sentido de retorno
};
export function CategorySelect({ categorySelected, setCategory }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }} //espaçamento da borda ao final da lista
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          // checked={category.id === 1}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
