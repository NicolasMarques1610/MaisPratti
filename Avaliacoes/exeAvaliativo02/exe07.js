// 7. Mapeamento e Ordenação 
// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. 

const produtos = 
[
  {
    nome: "TV Led",
    preco: 1600
  },
  {
    nome: "Ar condicionado",
    preco: 2200
  },
  {
    nome: "Computador",
    preco: 6200
  },
  {
    nome: "Notebook",
    preco: 12000
  },
  {
    nome: "iPhone",
    preco: 4800
  }
]

function ordenarProdutosPorNome(produtos) {
  let ordenado;

  ordenado = produtos.slice().sort((a,b) => a.preco - b.preco).map(produto => produto.nome);
  return ordenado;
}

console.log(ordenarProdutosPorNome(produtos));