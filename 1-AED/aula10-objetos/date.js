let date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.toString());

let date2 = new Date(2015, 7, 7); // ano, mes, dia
let date1 = new Date(2025, 7, 7);

console.log(date2.getTime());
console.log(date1.getTime());

let milissegundosEntreDatas = Math.abs(date2.getTime() - date1.getTime());

console.log(milissegundosEntreDatas);

let milissegundosPorDia = 1 * 24 * 60 * 60 * 1000;

console.log(
  `A diferença entre as datas é de ${
    milissegundosEntreDatas / milissegundosPorDia
  } dias`
);
