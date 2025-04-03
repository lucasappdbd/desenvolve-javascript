const botaoPesquisar = document.getElementById("botaoPesquisar");

botaoPesquisar.addEventListener("click", buscarUsuarios);

function buscarUsuarios() {
    const termoBusca = document.getElementById("buscar").value;
    const listaUsuariosDiv = document.getElementById("listaUsuarios");
    const semResultadosDiv = document.getElementById("semResultados");
    
    // Limpar resultados anteriores ao clicar em buscar
    localStorage.clear();
    listaUsuariosDiv.innerHTML = '';
    semResultadosDiv.style.display = 'none';
    
    if (termoBusca.trim() === '') {
        alert('Digite um nome para pesquisar!');
        return;
    }
    fetch(`https://api.github.com/search/users?q=${termoBusca}+in:login`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.items && dados.items.length > 0) {
                // Armazenar no localStorage e exibir os dados
                localStorage.setItem('usuariosGitHub', JSON.stringify(dados.items));
                exibirUsuarios(dados.items);
            } else {
                semResultadosDiv.style.display = 'block';
            }
        })
        .catch(erro => {
            console.error('Erro na busca:', erro);
            alert('Erro ao buscar usuários.');
        });
}

function exibirUsuarios(usuarios) {
    const listaUsuariosDiv = document.getElementById("listaUsuarios");

    usuarios.forEach(usuario => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.classList.add('usuario');
        usuarioDiv.innerHTML = `<p><strong>${usuario.login}</strong></p>`;        
        listaUsuariosDiv.appendChild(usuarioDiv);
    });
}