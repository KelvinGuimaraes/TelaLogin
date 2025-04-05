import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from ".";

export default function App() {
  return (
    <View style={styles.container}>{/* Container principal */}

      {/* Logo */}
      <Image
        source={require("./assets/Group 329.png")}
        style={{ margin: 20 }}
      />

      {/* mensagem de boas vindas */}  
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Bem-vindo(a) de volta!
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Acesse sua conta para continuar
        </Text>
      </View>
      
      {/* Inputs de email e senha */}
      <TextInput
        style={styles.email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput
        style={styles.senha}
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
      />

      {/* Botão de entrar */}
      <Pressable
        style={{
          width: "70%",
          borderRadius: 10,
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Button color={"#454B60"} title="Entrar" onPress={() => {}} />
        </View>
      </Pressable>

      {/* outras opções de login */}
      <Text style={{ fontSize: 16, color: "gray" }}>continuar com:</Text>

      {/* Opções de login */}
      <View style={styles.options}>

        {/* Botão do Facebook */}
        <Pressable style={styles.Facebook}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("./assets/facebook.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={{ color: "white" }}>Facebook</Text>
          </TouchableOpacity>
        </Pressable>

        {/* Botão do Google */}
        <Pressable style={styles.Google}>
          <TouchableOpacity 
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("./assets/google.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </Pressable>

      </View>

      {/* Links de esqueceu a senha e criar conta */}
      <Pressable style={styles.subConteiner} onPress={() => {}}>
        <Text>Esqueceu a senha?</Text>
        <Text>Criar uma conta</Text>
      </Pressable>
    </View>
  );
}
