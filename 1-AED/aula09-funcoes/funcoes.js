function RetornaParOuImpar(valor) {
  let resultado;

  if (valor % 2 === 0) {
    resultado = "PAR";
  } else {
    resultado = "IMPAR";
  }

  return resultado;
}

let numero = 10;
let resultado = RetornaParOuImpar(numero);
console.log(`O número ${numero} é ${resultado}`);

function printaNome(nome) {
  console.log(`Olá ${nome}`);
}
printaNome("Laura");

let printaNome1 = (nome) => console.log(`Olá ${nome}`); // funcao anônima ou arrow function
printaNome1("Lucas");
