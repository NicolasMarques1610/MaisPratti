let filmes = [
  {titulo: "Harry Potter", genero: "Fantasia"},
  {titulo: "Star Wars", genero: "Ficção Científica"},
  {titulo: "Para todas as garotas que já amei", genero: "Romance"},
  {titulo: "O melhor amigo da noiva", genero: "Comédia"},
  {titulo: "Vingadores", genero: "Ação"},
  {titulo: "O Senhor dos Anéis", genero: "Fantasia"},
  {titulo: "A Esperança", genero: "Aventura"},
  {titulo: "A Culpa é das Estrelas", genero: "Romance"},
  {titulo: "O Rei Leão", genero: "Animação"},
  {titulo: "Os Incríveis", genero: "Animação"}
]

// Listar a contagem de gêneros de filmes.
let contagemGeneros = {}

for(let i = 0; i < filmes.length; i++){
  let genero = filmes[i].genero
  if(contagemGeneros[genero]){
    contagemGeneros[genero]++
  } else {
    contagemGeneros[genero] = 1
  }
}

for (let genero in contagemGeneros){
  console.log(`${genero}: ${contagemGeneros[genero]}`)
}

let contagemFilmes = {};

filmes.forEach((filme) => {
  if(contagemFilmes[filme.genero]) {
    contagemFilmes[filme.genero]++
  } else {
    contagemFilmes[filme.genero] = 1
  }
});

for (let genero in contagemFilmes){
  console.log(`Estão presentes na lista ${contagemFilmes[genero]} do gênero ${genero}`)
}