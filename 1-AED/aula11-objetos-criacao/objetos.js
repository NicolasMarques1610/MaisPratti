let livro  = {
    nome: "Harry Potter",
    anoLancamento: 1997,
    autor: "J.K. Rowling",
    nrPaginas: 500,
    genero: "Fantasia",
    atores: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],

    mostrarCaracteristicas: function() {
        return `${this.nome} é um livro de ${this.genero} escrito por ${this.autor} e lançado em ${this.anoLancamento}. Ele tem ${this.nrPaginas} páginas e é estrelado por ${this.atores.join(", ")}.`;
    }
}

console.log(livro.mostrarCaracteristicas());

let livro2 = livro;
livro2.preco = 39.90;
console.log(livro);
console.log(livro2);