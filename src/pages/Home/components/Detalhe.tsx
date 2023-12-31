import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import nosfilmes from "../../../../assets/nos-fimes.png";
import aquiles from "../../../../assets/aquiles.jpg";
import imperfeitos from "../../../../assets/imperfeitos.jpg";
import little from "../../../../assets/little-women.jpg";

type Props = {
  nome: string;
  nomeLivraria: string;
  descricao: string;
  preco: string;
};

export default function Detalhe({
  nome,
  nomeLivraria,
  descricao,
  preco,
}: Props) {
  return (
    <>
 <Text style={estilos.informacaolivros}>{nome}</Text>

<View style={estilos.card}>
  <Image style={estilos.imageminfo} source={nosfilmes} />
  <Text style={estilos.nomelivros}>{nomeLivraria}</Text>
</View>

<Text style={estilos.descricao}>{descricao}</Text>
<Text style={estilos.preco}>{preco}</Text>






    
      {/* Livro: Melhor do que nos filmes */}

     {/* <View style={estilos.informacaolivros}>
        <View style={estilos.livro}>
          <View style={estilos.card}>
            <Image style={estilos.imageminfo} source={nosfilmes} />
          </View>
          <Text style={estilos.nomelivros}>Melhor do que nos Filmes</Text>
        </View>
        <Text style={estilos.descricao}>
          O último ano do ensino médio clamava por acontecimentos grandiosos, um
          baile inesquecível e momentos apaixonantes. Por isso, como uma boa
          romântica incurável, Liz estava determinada a fazer qualquer coisa
          para conquistar o verdadeiro amor. Até mesmo pedir ajuda ao vizinho
          irritante.
        </Text>
        <Text style={estilos.preco}>R$ 41,00</Text>
      </View>
    */}

      {/* Livro: A canção de aquiles */}

      {/*
      <View style={estilos.informacaolivros}>
        <View style={estilos.livro}>
          <View style={estilos.card}>
            <Image style={estilos.imageminfo} source={aquiles} />
          </View>
          <Text style={estilos.nomelivros}>Canção de Aquiles</Text>
        </View>

        <Text style={estilos.descricao}>
          A Canção de Aquiles é um romance de 2011 da escritora americana
          Madeline Miller. Ambientado durante a Era Heróica Grega, é uma
          adaptação da Ilíada de Homero contada da perspectiva de Pátroclo.
        </Text>
        <Text style={estilos.preco}>R$ 36,00</Text>
      </View>
      */}

      {/* Livro: Imperfeitos */}


 {/*
      <View style={estilos.informacaolivros}>
        <View style={estilos.livro}>
          <View style={estilos.card}>
            <Image style={estilos.imageminfo} source={imperfeitos} />
          </View>
          <Text style={estilos.nomelivros}>Imperfeitos</Text>
        </View>

        <Text style={estilos.descricao}>
          Olive se sente como a gêmea azarada da casa: dos acidentes
          estranhamente inexplicáveis ao fracasso na vida profissional e amorosa
          — nada dá certo para ela.
        </Text>
        <Text style={estilos.preco}>R$ 18,00</Text>
      </View>

      */}

      {/* Livro: Little Women */}

      {/*

      <View style={estilos.informacaolivros}>
        <View style={estilos.livro}>
          <View style={estilos.card}>
            <Image style={estilos.imageminfo} source={little} />
          </View>
          <Text style={estilos.nomelivros}>Little Women</Text>
        </View>

        <Text style={estilos.descricao}>
          Nos anos seguintes à Guerra de Secessão, Jo March e suas duas irmãs
          voltam para casa quando Beth, a tímida irmã caçula, desenvolve uma
          doença devastadora que muda para sempre a vida delas.
        </Text>
        <Text style={estilos.preco}>R$ 50,00</Text>
      </View>
      */}
    </>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    color: "#deb887",
  },

  livro: {
    flexDirection: "row",
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
    alignSelf: "center",
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

  card: {
    height: 140,
    width: "25%",
    backgroundColor: "#ffebcd",
    marginLeft: "3%",
    marginRight: "3%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
