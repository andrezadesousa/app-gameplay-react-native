import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screen/Home";
import { SignIn } from "../screen/SignIn";
import { theme } from "../global/styles/theme";

// const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        }
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
}
