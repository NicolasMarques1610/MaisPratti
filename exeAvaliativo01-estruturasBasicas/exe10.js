// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

let numero;

do {
  numero = Number(prompt("Digite um número inteiro: "));
} while(isNaN(numero) || !Number.isInteger(numero));

for (let i = 0; i < 10; i++) {
  console.log(numero);
}
