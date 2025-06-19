// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcule e escreva o percentual que cada um representa em relação ao total de eleitores.
const prompt = require('prompt-sync')();

let eleitores = Number(prompt("Digite o número de eleitores: "));
let totalVotos = eleitores;

do {
  brancos = Number(prompt("Digite o número de votos brancos: "));
} while (brancos > totalVotos || brancos < 0);
totalVotos -= brancos;

do {
  nulos = Number(prompt("Digite o número de votos nulos: "));
} while (nulos > totalVotos || nulos < 0);
totalVotos -= nulos;

do {
  validos = Number(prompt("Digite o número de votos válidos: "));
} while (validos > totalVotos || validos < 0 || validos + nulos + brancos != eleitores);

console.log(`O percentual de votos brancos é: ${(brancos / eleitores) * 100}%`);
console.log(`O percentual de votos nulos é: ${(nulos / eleitores) * 100}%`);
console.log(`O percentual de votos válidos é: ${(validos / eleitores) * 100}%`);