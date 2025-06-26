// 4. Fatorial Recursivo 
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. 
const prompt = require('prompt-sync')();

function fatorial(n) {
  if(n < 0) {
    throw new Error("O valor de n não pode ser menor que 0");
  }
  if(n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

const n = Number(prompt("Digite um número que você deseje saber o fatorial:"));
console.log(fatorial(n));