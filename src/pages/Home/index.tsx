import React from 'react';
import { StyleSheet,Image, Dimensions, Text, View } from 'react-native';

import nosfilmes from '../../../assets/nos-fimes.png';
import logo from '../../../assets/logo.png';

const width =  Dimensions.get('screen').width;

export default function Home(){
return<>
<Image source={nosfilmes} style={estilos.logo}/>

<Text style={estilos.titulo}>Livraria da Ari</Text>

<View style={estilos.titulo }>

<Text style={estilos.autornosfilmes}>Lynn Painter</Text>

<View style={estilos.informacaolivros}>
<Image style={estilos.imageminfo} source={logo}/>
<Text style={estilos.nomelivros}>Livraria da Ari</Text>
</View>

<Text style={estilos.descricao}>O último ano do ensino médio clamava por acontecimentos grandiosos, um baile inesquecível e momentos apaixonantes. Por isso, como uma boa romântica incurável, Liz estava determinada a fazer qualquer coisa para conquistar o verdadeiro amor. Até mesmo pedir ajuda ao vizinho irritante.</Text>
<Text style={estilos.preco}>R$ 41,00</Text>

</View>
</> 

}

const estilos = StyleSheet.create({
    logo: {
    width: "100%",
    height: 578 / 768 * width
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 26,
        width: "100%",
        textAlign: "center",
        color: "white",
        position: "absolute",
        padding: 16,
    },
    autornosfilmes: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
    },
    informacao:{
   paddingVertical: 8,
   padidingHorizontal:16

    },

    nomelivros:{
       fontSize: 16,
       lineHeight: 26,
       marginLeft: 12,
       fontWeight: "bold"

    },

    imageminfo:{
       width:32,
       height: 32

    },

    informacaolivros:{
       flexDirection: "row",
       paddingVertical: 12

    },

    descricao:{
       color: "#a3a3a3",
       fontStyle: "italic"

    },

    preco:{
       fontSize: 26,
       lineHeight: 42,
       color: "#2a9f85",
       marginTop: 8

    }
})