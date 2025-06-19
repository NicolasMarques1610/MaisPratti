//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). 
//Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.

const prompt = require('prompt-sync')();
let dia = prompt('Digite o dia da semana: ');

if (dia.toLowerCase() === 'sabado' || dia.toLowerCase() === 'domingo') {
  console.log('Final de Semana');
} else if(dia.toLowerCase() === 'segunda' || dia.toLowerCase() === 'terça' || dia.toLowerCase() === 'quarta' || dia.toLowerCase() === 'quinta' || dia.toLowerCase() === 'sexta') {  
  console.log('Dia Útil');
} else console.log('Dia inválido!');