import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/login"; // Certifique-se de que o caminho está correto
import Cadastro from "./src/Cadastro"; // Certifique-se de que o caminho está correto

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        {/* Tela de Login */}
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "Tela de Login" }}
        />

        {/* Tela de Cadastro */}
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Tela de Cadastro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
