// 9. Conversão Entre Formatos 
// Escreva duas funções: 
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. 
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares) {
  const obj = pares.reduce((acc, [chave, valor]) => {
    acc[chave] = valor;
    return acc;
  },{});

  return obj; // return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

// function objetoParaPares2(obj) {
//   const pares = [];
//   for (let chave in obj) {
//     if (obj.hasOwnProperty(chave)) {
//       pares.push([chave, obj[chave]]);
//     }
//   }

//   return pares;
// }

console.log(paresParaObjeto([["nome", "Nicolas"], ["idade", 23], ["cidade", "Porto Alegre"]]));
console.log(objetoParaPares({nome: "Nicolas", idade: 23, cidade: "Porto Alegre"}));
// console.log(objetoParaPares2({nome: "Nicolas", idade: 23, cidade: "Porto Alegre"}));