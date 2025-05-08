// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();
let numero, cont = 0, soma = 0;

do {
    numero = Number(prompt("Digite um número (0 para sair): "));
    if (!isNaN(numero) && numero !== 0) {
        cont++;
        soma += numero;
    }
} while (numero !== 0);

console.log((soma/cont).toFixed(2));