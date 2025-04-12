import React from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../index";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  login: undefined;
  Cadastro: undefined;
};

const Cadastro: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Group329.png")}
        style={{ margin: 25, marginTop: -20 }}
      />

      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Cadastro</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Faça o cadastro para continuar:
        </Text>
      </View>

      <Pressable style={styles.cadastro}>
        <TextInput
          style={styles.email}
          placeholder="Digite seu nome"
          accessibilityLabel="nome"
          autoCapitalize="none"
          autoComplete="name"
        />

        <TextInput
          style={styles.email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        <TextInput
          style={styles.email}
          placeholder="Telefone"
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoComplete="tel"
        />

        <TextInput
          style={styles.senha}
          placeholder="Senha"
          autoCapitalize="none"
          secureTextEntry
        />

        <TextInput
          style={styles.senha}
          placeholder="Confirmar senha"
          autoCapitalize="none"
          secureTextEntry
        />
      </Pressable>

      <Pressable
        style={{
          width: "70%",
          borderRadius: 10,
          marginBottom: 20,
          marginTop: -20,
        }}
      >
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Button
            color={"#454B60"}
            title="Entrar"
            onPress={() => navigation.navigate("login")}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Cadastro;