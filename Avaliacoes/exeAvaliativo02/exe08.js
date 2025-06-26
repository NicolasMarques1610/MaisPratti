// 8. Agrupamento por Propriedade 
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. 

const vendas = [
  { cliente: "Nicolas", total: 100 },
  { cliente: "Laura", total: 200 },
  { cliente: "Nicolas", total: 50 },
  { cliente: "Carlos", total: 300 },
  { cliente: "Nicolas", total: 100 },
  { cliente: "Laura", total: 200 },
  { cliente: "Bibiana", total: 50 },
  { cliente: "Vando", total: 300 }
];

const resultado = vendas.reduce((acc, venda) => {
  if(acc[venda.cliente]) {
    acc[venda.cliente] += venda.total;
  } else {
    acc[venda.cliente] = venda.total;
  }
  return acc;
},{});

console.log(resultado);