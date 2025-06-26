// 5. Debounce 
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo. 

function debounce(fn, delay) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function buscar() {
  console.log("Buscando...");
}

const buscaDebounce = debounce(buscar, 300);

buscaDebounce();
buscaDebounce();
buscaDebounce();
