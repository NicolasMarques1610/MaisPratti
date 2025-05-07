// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25
// se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de
// maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();
let macas;

do {
  macas = Number(prompt("Quantas maçãs você quer? "));
} while (macas <= 0);

if (macas >= 12) {
  console.log(`O valor total da compra é R$ ${(macas * 0.25).toFixed(2)}`);
} else console.log(`O valor total da compra é R$ ${(macas * 0.3).toFixed(2)}`);
