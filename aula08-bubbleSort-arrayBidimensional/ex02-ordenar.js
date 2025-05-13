let numeros = [3, 6, 2, 1];

// numeros.sort((a,b) => a-b); // ordena o array de forma crescente, se a-b for menor que 0, a vem antes de b, se a-b for maior que 0, b vem antes de a

// bubble sort
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros.length - 1 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      const temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
    }
  }
}

// numeros.sort((a, b) => b - a); // ordena o array de forma descrescente, se b-a for menor que 0, b vem antes de a, se b-a for maior que 0, a vem antes de b

console.table(numeros);
