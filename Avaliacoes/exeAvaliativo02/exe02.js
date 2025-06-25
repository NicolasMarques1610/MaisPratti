// 2. Jogo de Adivinhação 
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const prompt = require('prompt-sync')();

const randomVal = Math.floor((Math.random() * 100) + 1);
let bool = true;

while(bool) {
  let val = Number(prompt("Tente adivinhar o valor(1-100):"))
  if(val > randomVal) {
    console.log("mais baixo");
  } else if(val < randomVal) {
    console.log("mais alto");
  } else {
    bool = false;
    console.log("Acertou!!");
  }
}