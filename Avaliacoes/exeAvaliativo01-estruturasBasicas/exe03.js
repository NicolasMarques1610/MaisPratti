// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", 
// ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let nota;

do {
    nota = Number(prompt('Digite a nota: '));
} while(nota < 0 || nota > 10)

if(nota < 5) {
    console.log('Reprovado');
} else if(nota >= 5 && nota < 7) {
    console.log('Recuperação');
} else console.log('Aprovado');