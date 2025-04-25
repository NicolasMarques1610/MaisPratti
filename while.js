const prompt = require("prompt-sync")();
let val = Number(prompt("Digite um valor que você quer saber a tabuada: "));
let contador = 1;

while(contador <= 10) {
  console.log(`${val} * ${contador} = ${val*contador}`);
  contador++;
}