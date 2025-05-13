function inverterString(palavra) {
  return palavra.split("").reverse().join("");
}

function inverterString2(palavra) {
  let palavraInvertida = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra.charAt(i);
  }
  return palavraInvertida;
}

console.log(inverterString("Nicolas"));
console.log(inverterString2("Nicolas"));
