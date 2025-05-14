let livraria = [
  {titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997},
  {titulo: "Harry Potter e a Câmara Secreta", autor: "J.K. Rowling", ano: 1998},
  {titulo: "Harry Potter e o Prisioneiro de Azkaban", autor: "J.K. Rowling", ano: 1999},
  {titulo: "Harry Potter e o Cálice de Fogo", autor: "J.K. Rowling", ano: 2000},
  {titulo: "Harry Potter e a Ordem da Fênix", autor: "J.K. Rowling", ano: 2003},
]

// For Of para iterar sobre os livros publicados antes de 2000
for(let livro of livraria) {
  if (livro.ano < 2000) {
    console.log(livro);
  }
}