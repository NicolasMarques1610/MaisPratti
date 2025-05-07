function somatorioArray(array) {
  return array.reduce((acumulador, valor) => acumulador + valor, 0);
}

console.log(somatorioArray([5, 3, 8, 1, 2, 10, 11]));

somatorioArray1 = (array) =>
  console.log(array.reduce((acumulador, valor) => acumulador + valor, 0));

somatorioArray1([5, 3, 8, 1, 2, 10, 11]);
