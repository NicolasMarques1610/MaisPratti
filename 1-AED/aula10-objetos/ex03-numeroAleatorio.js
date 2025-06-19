function GerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(GerarNumeroAleatorio(10, 20)); // 10 a 20
