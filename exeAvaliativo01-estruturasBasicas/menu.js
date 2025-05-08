// Menu para escolher qual exercicio executar
const prompt = require('prompt-sync')();
let continuar = 1;

const menu = () => {
    console.log(" ---------------------------------------");
    console.log("|    Bem-vindo ao Menu de Exercícios!   |");
    console.log("|  Escolha um exercício para executar:  |");
    console.log("| 0. Sair                               |");
    console.log("| 1. Exercício 1                        |");
    console.log("| 2. Exercício 2                        |");
    console.log("| 3. Exercício 3                        |");
    console.log("| 4. Exercício 4                        |");
    console.log("| 5. Exercício 5                        |");
    console.log("| 6. Exercício 6                        |");
    console.log("| 7. Exercício 7                        |");
    console.log("| 8. Exercício 8                        |");
    console.log("| 9. Exercício 9                        |");
    console.log("| 10. Exercício 10                      |");
    console.log("| 11. Exercício 11                      |");
    console.log("| 12. Exercício 12                      |");
    console.log("| 13. Exercício 13                      |");
    console.log("| 14. Exercício 14                      |");
    console.log("| 15. Exercício 15                      |");
    console.log(" ---------------------------------------\n");

    const choice = Number(prompt("Digite o número do exercício: "));

    switch (choice) {
        case 1:
            console.log("Executando Exercício 1 - Verifica se é par ou ímpar a partir da entrada!\n");
            require('./exe01.js');
            break;
        case 2:
            console.log("Executando Exercício 2 - Classifica a idade em: criança, adolescente, adulto ou idoso.\n");
            require('./exe02.js');
            break;
        case 3:
            console.log("Executando Exercício 3 - Classifica nota de 0 a 10 em: Aprovado, Recuperação ou Reprovado.\n");
            require('./exe03.js');
            break;
        case 4:
            console.log("Executando Exercício 4 - Menu interativo com 3 opções utilizando switch-case.\n");
            require('./exe04.js');
            break;
        case 5:
            console.log("Executando Exercício 5 - Calcula o IMC e determina a categoria de peso.\n");
            require('./exe05.js');
            break;
        case 6:
            console.log("Executando Exercício 6 - Verifica se os lados formam um triângulo e classifica o tipo.\n");
            require('./exe06.js');
            break;
        case 7:
            console.log("Executando Exercício 7 - Calcula valor total da compra de maçãs com base na quantidade.\n");
            require('./exe07.js');
            break;
        case 8:
            console.log("Executando Exercício 8 - Lê 2 valores e exibe em ordem crescente.\n");
            require('./exe08.js');
            break;
        case 9:
            console.log("Executando Exercício 9 - Contagem regressiva de 10 até 1 usando loop for.\n");
            require('./exe09.js');
            break;
        case 10:
            console.log("Executando Exercício 10 - Lê um número inteiro e o exibe 10 vezes na tela.\n");
            require('./exe10.js');
            break;
        case 11:
            console.log("Executando Exercício 11 - Solicita 5 números e calcula a soma total com loop for.\n");
            require('./exe11.js');
            break;
        case 12:
            console.log("Executando Exercício 12 - Exibe a tabuada de um número fornecido (1 a 10).\n");
            require('./exe12.js');
            break;
        case 13:
            console.log("Executando Exercício 13 - Recebe números decimais até 0 e calcula a média.\n");
            require('./exe13.js');
            break;
        case 14:
            console.log("Executando Exercício 14 - Calcula o fatorial de um número usando for ou while.\n");
            require('./exe14.js');
            break;
        case 15:
            console.log("Executando Exercício 15 - Gera e imprime os 10 primeiros números da sequência de Fibonacci.\n");
            require('./exe15.js');
            break;
        case 0:
            console.log("Saindo...");
            process.exit();
        default:
            console.log("Opção inválida. Tente novamente.");
            menu();
    }

}

while (continuar === 1) {
    menu();
    continuar = Number(prompt("\nDeseja continuar? (1 - Sim): "));
}