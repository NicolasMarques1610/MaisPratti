function somaMatrizes(matriz1, matriz2) {
  for (let i = 0; i < matriz1.length; i++) {
    if (matriz1[i].length !== matriz2[i].length) {
      return "As matrizes devem ter o mesmo tamanho.";
    }
  }

  const resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz1[i].length; j++) {
      resultado[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }

  return resultado;
}

console.log(somaMatrizes([[1, 2, 3],[4, 5, 6]], [[7, 8, 9],[10, 11, 12]]));
