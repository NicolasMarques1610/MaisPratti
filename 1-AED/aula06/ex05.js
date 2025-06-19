//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. 
//Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a 
//repetição deve ser encerrada sem imprimir mensagem alguma.

const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número: '));

while (numero !== 0) {
  if(numero < 0) {
    console.log('NEGATIVO');
    numero = Number(prompt('Digite um número: '));
  } else {
    console.log('POSITIVO');
    numero = Number(prompt('Digite um número: '));
  }
}