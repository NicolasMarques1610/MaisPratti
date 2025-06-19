function formatarData(data) {
  let dia = String(data.getDate()).padStart(2, "0"); // Adiciona zero à esquerda se necessário
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

console.log(formatarData(new Date(2025, 11, 8)));
