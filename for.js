const prompt = require("prompt-sync")();

let val = Number(prompt("Digite um valor que você quer saber a tabuada: "));

for (let i = 0; i <= 10; i++) {
  console.log(`${val} * ${i} = ${val*i}`);
}