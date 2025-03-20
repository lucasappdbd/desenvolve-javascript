// Gerenciamento de estoque livraria

const estoque = [
    {id: 2035, titulo: 'Harry Potter', autor: 'J.K. Rowling', quantidade: 12},
    {id: 3547, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', quantidade: 15},
    {id: 4426, titulo: 'O Livro das Fadas', autor: 'Betty Bib', quantidade: 20},
    {id: 9139, titulo: 'O Programador Pragmático', autor: 'Andy Hunt, Dave Thomas', quantidade: 7},
];

// Adicionar livro ao estoque
const adicionaLivro = (id, titulo, autor, quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade
    });
};

adicionaLivro(3437, 'Código Limpo', 'Tio Bob', 18);
console.log(`O livro "${(estoque[estoque.length - 1]).titulo}" foi adicionado ao estoque.`);

// Remover livro pelo titulo
const removeLivro = (nomeDoLivro) => {
    const existeNomeNoEstoque = !!estoque.find(livro => livro.titulo === nomeDoLivro);
    if(existeNomeNoEstoque) {
        for(let indice = 0; indice < estoque.length; indice++) {
            if(estoque[indice].titulo === nomeDoLivro) {
                console.log(`O livro "${nomeDoLivro}" foi removido.`);
                estoque.splice(indice, 1);
                break;
            }
        }
    }
    else {
        console.log(`O livro "${nomeDoLivro}" não foi encontrado.`)
    }
}

removeLivro('O Livro das Fadas');
removeLivro('O Senhor dos Anéis 2');

// Atualizar quantidade pelo título
const atualizaQuantidade = (nomeDoLivro, novaQuantidade) => {
    const existeNomeNoEstoque = !!estoque.find(livro => livro.titulo === nomeDoLivro);
    if(existeNomeNoEstoque) {
        for(let livro of estoque) {
            if(livro.titulo === nomeDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log(`A quantidade do livro ${livro.titulo} foi atualizada para ${novaQuantidade}.`);
                break;
            }
        }
    }
    else {
        console.log(`O título "${nomeDoLivro}" não foi encontrado no estoque.`)
    }
}

atualizaQuantidade('Harry Potter', 300);
atualizaQuantidade('Harry Potter 2', 300);

// Listar livros que estão no array
const listarLivros = () => {
    if(estoque.length === 0) {
        console.log('O estoque está vazio!');
    }
    else {
        console.log(`O estoque possui ${estoque.length} títulos:`)
        for(let livro of estoque) {            
            console.log(`
                ID: ${livro.id}
                Livro: ${livro.titulo}
                Autor: ${livro.autor}
                Quantidade: ${livro.quantidade}`);
        }
    }
}

listarLivros();