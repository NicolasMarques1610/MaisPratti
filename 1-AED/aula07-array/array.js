let listaFrutas = Array();
let listaNomes = ['Deborah', 'Nicolas'];

listaFrutas[0] = 10;
listaFrutas[1] = 'morango';
listaFrutas['adocicadas'] = 'pera'

for(let i = 0; i < listaFrutas.length; i++) {
  console.log(listaFrutas[i]);
}

console.table(listaFrutas);

listaFrutas.pop(); // remove o último elemento
listaFrutas.shift(); // remove o primeiro elemento
delete listaFrutas['adocicadas']; // remove o elemento pera em adocicadas

listaFrutas.unshift('banana'); // adiciona um elemento no início
listaFrutas.push('abacaxi'); // adiciona um elemento no final

console.table(listaFrutas);