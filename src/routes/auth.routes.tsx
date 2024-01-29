import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screen/Home";
import { SignIn } from "../screen/SignIn";
import { AppointmentDetails } from "../screen/AppointmentDetails";

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
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails}></Stack.Screen>
    </Stack.Navigator>
  );
}
