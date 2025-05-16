let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []},
            ]}
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]

function mostrarCategorias(categorias, nivel = 0) {
    for (let categoria of categorias) {
        console.log(" ".repeat(nivel * 2) + categoria.nome);
        if (categoria.filhos.length > 0) {
            mostrarCategorias(categoria.filhos, nivel+1);
        }
    }
}

mostrarCategorias(categorias, 0);