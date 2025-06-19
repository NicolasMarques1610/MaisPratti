// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa 
// e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let peso, altura;

do {
  peso = Number(prompt('Digite o peso (kg): '));
} while(peso <=0 || peso > 600);

do {
  altura = Number(prompt('Digite a sua altura (m): '));
} while(altura <=0 || altura > 3);

let imc = peso / (altura * altura);
console.log(`IMC: ${imc.toFixed(2)}`);

if(imc < 18.5) {
  console.log('Abaixo do peso!');
} else if(imc < 24.9) {
  console.log('Peso normal!');
} else if(imc < 29.9) {
  console.log('Sobrepeso!');
} else console.log('Obesidade!');