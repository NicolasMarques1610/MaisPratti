// Calcule a média das notas dos alunos de um professor e digam se a turma do professor está na média.

let professor = {
    nome: "Carlos",
    materia: "Matemática",
    notas: {
        aluno1: [5,2],
        aluno2: [3,7]
    }
}

function calculaMedia(professor) {
    let soma = 0;

    for (let aluno in professor.notas) {
        let somaAluno = 0;
        let notas = professor.notas[aluno];
        for (let nota of notas) {
            somaAluno += nota;
        }
        soma += somaAluno / notas.length;
    }

    return soma / Object.keys(professor.notas).length;
}

if(calculaMedia(professor) >= 7) {
    console.log("A turma está na média");
} else console.log("A turma não está na média");

let somaNotas = 0;
let numeroAlunos = 0;

for (let aluno in professor.notas) {
    somaNotas += Array.isArray(professor.notas[aluno]) 
        ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length
        : professor.notas[aluno];

    numeroAlunos++;
}

if((somaNotas/numeroAlunos) >= 7) {
    console.log("A turma está na média");
} else console.log("A turma não está na média");