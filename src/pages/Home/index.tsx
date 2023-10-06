import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Topo from "./components/Topo";
import Detalhe from "./components/Detalhe";
import home from '../../mocks/home';

export default function Home() {
  return (
    <>
      <Topo titulo={home.topo.titulo} />
      <View style={estilos.home}>
        <Detalhe
          nome={home.detalhes.nome}
          nomeFazenda={home.detalhes.nomeLivraria}
          descricao={home.detalhes.descricao}
          preco={home.detalhes.preco}
        />
      </View>
    </>
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
