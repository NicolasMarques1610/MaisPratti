// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require('prompt-sync')();
let numero;

do {
    numero = Number(prompt("Digite um numero: "));
} while (isNaN(numero) || numero < 1);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}