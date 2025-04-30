// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let opcao;

do{
    console.log('-----------------Menu-----------------');
    console.log('| 1.Calcular fatorial de um número   |');
    console.log('| 2.Calcular o quadrado de um número |');
    console.log('| 3.Sair                             |');
    console.log('--------------------------------------');

    opcao = Number(prompt('Escolha uma das 3 opções: '));

    switch(opcao) {
        case 1:
            let numero = Number(prompt('Digite o número que você quer saber o binário: '));
            console.log('O binário é ' + numero.toString(2))
            break;
        case 2:
            let n = Number(prompt('Digite o número que você quer saber o quadrado: '));
            console.log('O quadrado é ' + n*n);
            break;
        case 3:
            console.log('Encerrando o programa...');
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            break;    
    }
} while(opcao !== 3);