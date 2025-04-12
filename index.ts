import { registerRootComponent } from "expo";

import 'react-native-reanimated';
import App from "./App"; // Altere para importar o App
import { StyleSheet } from "react-native";

// Registra o componente App como raiz
registerRootComponent(App);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  email: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  senha: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  subConteiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
  },
  Facebook: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#454B60",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    width: "42%",
    marginRight: 40,
  },
  Google: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    width: "40%",
    marginLeft: 10,
  },

  cadastro: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    marginTop: -15,
    padding: 20,
    backgroundColor: "#ffffff",
  },
});