//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let val;

do {
    val = Number(prompt('Digite um número inteiro:'));
} while(!Number.isInteger(val))

if(val % 2 === 0) {
    console.log('É par!!')
} else console.log('É ímpar!!')