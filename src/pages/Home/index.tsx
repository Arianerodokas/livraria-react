import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Topo from "./components/Topo";
import Detalhe from "./components/Detalhe";

export default function Home() {
  return (
    <View>
      <View style={estilos.titulo}>
        <Topo />
      </View>
      <Detalhe />
    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "#E2B774",
    padding: 16,
  },
});
