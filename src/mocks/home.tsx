import nosfilmes from "../../../../assets/nos-fimes.png";
import aquiles from "../../../../assets/aquiles.jpg";
import imperfeitos from "../../../../assets/imperfeitos.jpg";
import little from "../../../../assets/little-women.jpg";

const home = {
    topo: {
        titulo: "Detalhes dos melhores livros",
    },
    detalhes: {
        nome: "Livraria",
        nomeLivraria: "Livraria e Aria",
        descricao: "Os melhores Livros só aqui",
        preco: "R$ 80,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Livros",
      lista: [
        {
          nome: "Melhor que nos Livros",
          imagem: nosfilmes,
        },
        {
          nome: "Canção de Aquiles",
          imagem: aquiles,
        },
        {
          nome: "Imperfeitos",
          imagem: imperfeitos,
        },
        {
          nome: "Little",
          imagem: little,
        }
      ]
    }
  }

  export default home;