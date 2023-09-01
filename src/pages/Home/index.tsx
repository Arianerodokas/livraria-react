import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import nosfilmes from "../../../assets/nos-fimes.png";
import logo from "../../../assets/logo.png";
import aquiles from "../../../assets/aquiles.jpg";
import imperfeitos from "../../../assets/imperfeitos.jpg";
import little from "../../../assets/little-women.jpg";

const width = Dimensions.get("screen").width;

export default function Home() {
  return (
    <View>
      <Image source={logo} style={estilos.logo} />

      <Text style={estilos.titulo}>Livraria e Ari</Text>

      <View style={estilos.titulo}>
        {/* Livro: Melhor do que nos filmes */}

        <View style={estilos.informacaolivros} >
          <View style={estilos.livro}>
            <Image style={estilos.imageminfo} source={nosfilmes} />
            <Text style={estilos.nomelivros}>Melhor do que nos Filmes</Text>
          </View>
          <Text style={estilos.descricao}>
            O último ano do ensino médio clamava por acontecimentos grandiosos,
            um baile inesquecível e momentos apaixonantes. Por isso, como uma
            boa romântica incurável, Liz estava determinada a fazer qualquer
            coisa para conquistar o verdadeiro amor. Até mesmo pedir ajuda ao
            vizinho irritante.
          </Text>
          <Text style={estilos.preco}>R$ 41,00</Text>
        </View>

        {/* Livro: A canção de aquiles */}

        <View style={estilos.informacaolivros}>
          <View style={estilos.livro}>
            <Image style={estilos.imageminfo} source={aquiles} />
            <Text style={estilos.nomelivros}>Canção de Aquiles</Text>
          </View>

          <Text style={estilos.descricao}>
            A Canção de Aquiles é um romance de 2011 da escritora americana
            Madeline Miller. Ambientado durante a Era Heróica Grega, é uma
            adaptação da Ilíada de Homero contada da perspectiva de Pátroclo.
          </Text>
          <Text style={estilos.preco}>R$ 36,00</Text>
        </View>

            {/* Livro: Imperfeitos */}

            <View style={estilos.informacaolivros}>
          <View style={estilos.livro}>
            <Image style={estilos.imageminfo} source={imperfeitos} />
            <Text style={estilos.nomelivros}>Imperfeitos</Text>
          </View>

          <Text style={estilos.descricao}>
          Olive se sente como a gêmea azarada da casa: dos acidentes estranhamente 
          inexplicáveis ao fracasso na vida profissional e amorosa — nada dá certo
          para ela.
          </Text>
          <Text style={estilos.preco}>R$ 18,00</Text>
        </View>

           {/* Livro: Little Women */}

           <View style={estilos.informacaolivros}>
          <View style={estilos.livro}>
            <Image style={estilos.imageminfo} source={little} />
            <Text style={estilos.nomelivros}>Little Women</Text>
          </View>

          <Text style={estilos.descricao}>
          Nos anos seguintes à Guerra de Secessão, Jo March e suas 
          duas irmãs voltam para casa quando Beth, a tímida irmã caçula,
           desenvolve uma doença devastadora que muda para sempre a vida delas.
          </Text>
          <Text style={estilos.preco}>R$ 50,00</Text>
        </View>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo:{
    color:"#deb887"

  },

  livro: {
    flexDirection: "row"
  },
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

  informacao: {
    paddingVertical: 8,
    padidingHorizontal: 16,
  },

  nomelivros: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: "bold",
    alignSelf: "center"
  },

  imageminfo: {
    width: 55,
    height: 70,
  },

  informacaolivros: {
    flexDirection: "column",
    paddingVertical: 12,
  },

  descricao: {
    color: "#a3a3a3",
    fontStyle: "italic",
  },

  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#F6E90E",
    marginTop: 8,
    fontWeight: "bold",
  },
});
