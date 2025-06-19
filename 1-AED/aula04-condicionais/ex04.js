// Exercício 4: verificar se um número é positivo, negativo ou zero
const prompt = require('prompt-sync')();

let valor1 = Number(prompt('Insira um valor: '));

if(valor1 > 0) {
  console.log('O número é positivo');
} else if(valor1 < 0) {
  console.log('O número é negativo');
} else {
  console.log('O número é zero');
}