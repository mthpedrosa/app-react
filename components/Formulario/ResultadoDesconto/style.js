import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    marginTop: 15,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  txtResultado: {
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },
  textMensagem: {
    fontSize: 18,
    color: "#000000",
  },
  boxBotaoCompartilhar: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  compartilhar: {
    backgroundColor: "#1877F2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textCompartilhar: {
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingHorizontal: 30,
  }
});

export default styles