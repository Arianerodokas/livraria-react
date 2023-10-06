import React from "react";
import { Image, Text, StyleSheet, Dimensions } from "react-native";
import logo from "../../../../assets/logo.png";

const width = Dimensions.get("screen").width;

type Props ={
  titulo: string;
}  // adicionei essa parte


export default function Topo({titulo}: Props) { // adicionei essa parte
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>{titulo} </Text> // adicionei essa parte
    
    </>
    
  );
}


const estilos = StyleSheet.create({
  logo: {
    width: "100%",
    height: (578 / 768) * width,
  },

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
