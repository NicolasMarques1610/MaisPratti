//A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

const prompt = require("prompt-sync")();
let turmaC = 60, turmaD = 20
let totalAlunos = turmaC + turmaD;
let percC, percD;

do {
  percC = Number(prompt("Digite o percentual de alunos reprovados na turma C: "));
} while (percC < 0 || percC > 100);

do {
  percD = Number(prompt("Digite o percentual de alunos aprovados na turma D: "));
} while (percD < 0 || percD > 100);

let alunosRepC = percC * turmaC / 100;
let alunosRepD = (100-percD) * turmaD / 100;

console.log(`O percentual de alunos reprovados na turma C é: ${percC}%`);
console.log(`O percentual de alunos reprovados na turma D é: ${100-percD}%`);
console.log(`O percentual de alunos reprovados em relação ao total de alunos das duas turmas é: ${((alunosRepC + alunosRepD)/totalAlunos) * 100}%`)