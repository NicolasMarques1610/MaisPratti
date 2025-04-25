// Exercício 3: façam uma calcularoda simples utilizando entrada de usuário.

const prompt = require('prompt-sync')();

let valor1 = Number(prompt('Digite o primeiro valor: '));
let valor2 = Number(prompt('Digite o segundo valor: '));
let op = prompt('Digite a operação desejada (+, -, /, *): ');
let resultado = 0;

switch(op) {
  case '+':
    resultado = valor1 + valor2;
    console.log('Resultado: ' + resultado);
    break;
  case '-':
    resultado = valor1 - valor2;
    console.log('Resultado: ' + resultado);
    break;
  case '/':
    if(valor2 !== 0) {
      resultado = valor1 / valor2;
      console.log('Resultado: ' + resultado);
    } else {
      console.log('Divisão por zero não é permitida.');
    }
    break;
  case '*':
    resultado = valor1 * valor2;
    console.log('Resultado: ' + resultado);
    break;
  default:
    console.log('Opção inválida');
    break;
}