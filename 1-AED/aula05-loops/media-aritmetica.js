// façam a média aritmética de números inseridos até que o usuário digite 0.
const prompt = require("prompt-sync")();

let val;
let soma = 0;
let cont = 0;

// for (let i = 0; val != 0; i++) {
//   val = Number(prompt("Digite um valor (0 para sair): "));
//   soma += val;

//   if (val == 0) {
//     console.log(`${soma/i} é a média aritmética dos números digitados.`);
//   }
// }

while (val != 0) {
  val = Number(prompt("Digite um valor (0 para sair): "));
  soma += val;
  cont++;
}
console.log(`${soma/(cont-1)} é a média aritmética dos números digitados.`);

// do {
//   val = Number(prompt("Digite um valor (0 para sair): "));
//   soma += val;
//   cont++;
// } while (val != 0);
// console.log(`${soma/(cont-1)} é a média aritmética dos números digitados.`);