// Escreva um algoritmo para ler 2 valores (considere que não serão lidos
// valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

do {
  if (isNaN(valor1)) {
    console.log("Por favor, insira um número válido para o primeiro valor.");
    valor1 = Number(prompt("Digite o primeiro valor: "));
  }
  if (isNaN(valor2)) {
    console.log("Por favor, insira um número válido para o segundo valor.");
    valor2 = Number(prompt("Digite o segundo valor: "));
  }
} while (isNaN(valor1) || isNaN(valor2));

console.log("-------------------------");

console.log(
  "Valores em ordem crescente: " +
    (valor1 < valor2 ? valor1 + ", " + valor2 : valor2 + ", " + valor1)
);
