// 3. Palavras Únicas 
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.
const prompt = require('prompt-sync')();

function palavrasUnicas(frase) {
  let palavras = frase.split(" ");
  let unicas = [];

  for(let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let cont = 0;

    for (let j = 0; j < palavras.length; j++) {
      if(palavras[j] === palavraAtual) {
        cont++;
      }
    }

    if(cont === 1) {
      unicas.push(palavraAtual);
    }
  }

  return unicas;
}

let frase = prompt("Digite uma Frase:");
console.log(palavrasUnicas(frase));