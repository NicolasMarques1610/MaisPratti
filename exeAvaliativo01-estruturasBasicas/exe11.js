// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();
let soma = 0;
let numeros = [];

for (let i = 0; i < 5; i++) {
    do {
        numeros[i] = Number(prompt(`Digite o ${i + 1}º número: `));
    } while (isNaN(numeros[i]));
    soma += numeros[i];
}

console.log(soma);