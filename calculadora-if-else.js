// Exercício 3: façam uma calcularoda simples utilizando entrada de usuário.

const prompt = require('prompt-sync')();

let valor1 = Number(prompt('Digite o primeiro valor: '));
let valor2 = Number(prompt('Digite o segundo valor: '));
let op = prompt('Digite a operação desejada (+, -, /, *): ');
let resultado = 0;

if (op === '+') {
  resultado = valor1 + valor2;
} else if(op === '-') {
  resultado = valor1 - valor2;
} else if(op === '/') {
  if(valor2 !== 0) {
    resultado = valor1 / valor2;
  } else {
    console.log('Divisão por zero não é permitida.');
    resultado = undefined;
  }
} else if(op === '*') {
  resultado = valor1 * valor2;
} else {
  console.log('Operação inválida.');
  resultado = undefined;
}

if(resultado !== undefined) {
  console.log(`O resultado da operação ${valor1} ${op} ${valor2} é: ${resultado}`);
}