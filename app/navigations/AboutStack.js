import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/About";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F0A500",
        },

        headerTintColor: "white",

        headerTitleAlign: "center",

        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={Home}
        options={{ title: "Quiénes somos" }}
      />
    </Stack.Navigator>
  );
}
