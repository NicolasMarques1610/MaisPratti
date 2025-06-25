// 1. Validação de Datas 
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.
const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
  const data = new Date(ano, mes - 1, dia);

  return (
    data.getFullYear() === ano &&
    data.getMonth() === mes - 1 &&
    data.getDate() === dia
  );
}

let dia, mes, ano;

dia = Number(prompt("Digita um dia:"));
mes = Number(prompt("Digita um mes:"));
ano = Number(prompt("Digita um ano:"));

if (ehDataValida(dia, mes, ano)) {
  console.log("Data válida!");
} else {
  console.log("Data inválida!");
}