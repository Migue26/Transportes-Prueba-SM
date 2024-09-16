import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import VerificarScreen from "../screens/VerificarScreen";
import ParaderosScreen from "../screens/ParaderosScreen";
import AdminScreen from "../screens/AdminScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verificar"
        component={VerificarScreen}
        options={{ title: "cambio1" }}
      />
      <Stack.Screen name="Paraderos" component={ParaderosScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
  );
}
