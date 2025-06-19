// Escreva um algoritmo que leia em graus Celsius e converta para graus Fahrenheit.
// Fórmula: F = C * 9/5 + 32

const prompt = require('prompt-sync')();
let celsius = Number(prompt("Digite a temperatura em graus Celsius: "));
let fahrenheit = celsius * 1.8 + 32;
console.log(`A temperatura em graus Fahrenheit é: ${fahrenheit}`);