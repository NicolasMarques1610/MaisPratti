// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();
let numero, fatorial = 1;

// do {
//     numero = Number(prompt("Digite um número inteiro positivo: "));
// } while (isNaN(numero) || numero < 1);

for (let i = 5; i > 1; i--) {
    fatorial *= i;
}

console.log(fatorial);