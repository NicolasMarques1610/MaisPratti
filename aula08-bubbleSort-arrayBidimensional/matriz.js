let matriz = [];
let soma = 0;
let somaDiagonalSecundaria = 0;

for(let i = 0; i < 3; i++){
    matriz[i] = [];
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Math.floor(Math.random() * 10);
        if(i === j) {
            soma += matriz[i][j];
        }
    }
}

console.table(matriz);

// for (let i = 0; i < matriz.length; i++) {
//     soma += matriz[i][i];
// }

for (let i = 0; i < matriz.length; i++) {
    somaDiagonalSecundaria += matriz[i][matriz.length - 1 - i]; // matriz[0][2], matriz[1][1], matriz[2][0]
}

let somaTotal = soma + somaDiagonalSecundaria;

console.log("Soma da diagonal principal:", soma);
console.log("Soma da diagonal secundária:", somaDiagonalSecundaria);
console.log("Soma total:", somaTotal);