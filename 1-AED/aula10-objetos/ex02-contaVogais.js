function contaVogais(frase) {
  const vogais = ["a", "e", "i", "o", "u"];
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    const letra = frase[i].toLowerCase();

    if (vogais.includes(letra)) {
      cont++;
    }
  }

  return cont;
}

function contaVogais2(frase) {
  const vogais = frase.match(/[aeiou]/gi); // Regex para encontrar vogais e g para global (não parar na primeira ocorrência) e i ignore case
  return vogais ? vogais.length : 0;
}

console.log(contaVogais("Aula 10 de JavaScript"));
console.log(contaVogais2("Aula 10 de JavaScript"));
