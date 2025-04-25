// Exercicio 6: definam faixas etárias para crianças, adolescentes, adultos e idosos e com switch apresentem na tela se a pessoa que 
// informou a idade está em uma e qual a faixa etária
const prompt = require('prompt-sync')();

let idade = Number(prompt('Insira sua idade: '));

switch (true) {
  case (idade >= 0 && idade <= 12):
    console.log('Você é uma criança.');
    break;
  case (idade >= 13 && idade <= 17):
    console.log('Você é um adolescente.');
    break;
  case (idade >= 18 && idade <= 64):
    console.log('Você é um adulto.');
    break;
  case (idade >= 65):
    console.log('Você é um idoso.');
    break;
  default:
    console.log('Idade inválida.');
}