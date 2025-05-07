function maiorNumero(array) {
  let maior = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  return maior;
}

console.log(maiorNumero([1, 2, 3, 4, 5]));

maiorNumero2 = (array) => array.reduce((a, b) => (a > b ? a : b), array[0]); // Outra forma de fazer a mesma coisa, mas com reduce
console.log(maiorNumero2([1, 2, 3, 4, 5]));
