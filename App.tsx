import React from "react";
import { Text, View, Image, TextInput, Pressable, Button } from "react-native";
import { styles } from ".";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Group 329.png")}
        style={{ margin: 20 }}
      />

      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Bem-vindo(a) de volta!
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Acesse sua conta para continuar
        </Text>
      </View>

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

      <Text style={{ fontSize: 16, color: "gray" }}>continuar com:</Text>

      <View style={styles.options}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#454B60",
            borderRadius: 10,
          }}
          onPress={() => {}}
        >
          <Image
            source={require("./assets/facebook.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ color: "white" }}>Facebook</Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#ffffff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
          onPress={() => {}}
        >
          <Image
            source={require("./assets/google.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ color: "#454B60" }}>Google</Text>
        </Pressable>
      </View>

      <Pressable style={styles.subConteiner} onPress={() => {}}>
        <Text>Esqueceu a senha?</Text>
        <Text>Criar uma conta</Text>
      </Pressable>
    </View>
  );
}
