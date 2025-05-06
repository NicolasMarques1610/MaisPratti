let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = numeros.reduce((acumulador, numero) => acumulador + numero,0); // soma dos elementos do array com reduce que reduz o array a 1 valor, acumulador começa com 0 e vai somando com cada elemento do array
let media = soma / numeros.length;
let pares = numeros.filter(numero => numero % 2 === 0); // pego apenas os números pares do array com filter

console.table(numeros);
console.log("-----------------");
console.log("Soma: " + soma);
console.log("Média: " + media);
console.log("-----------------");
console.table(pares);