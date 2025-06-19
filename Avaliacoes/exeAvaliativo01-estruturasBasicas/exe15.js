// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
    console.log(b);
    let temp = b;
    b = a + b;
    a = temp;
}