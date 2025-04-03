let avatarSelecionado = null;

const botaoPostar = document.getElementById('botao-postar');

function selectAvatar(avatar) {
    avatarSelecionado = avatar;
    botaoPostar.disabled = false;
}

async function fetchCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
}

function renderizarPosts() {
    const feedContainer = document.getElementById('feed');
    feedContainer.innerHTML = ''; // Limpar o feed antes de renderizar

    const posts = carregaPostsLocalStorage(); // Carregar os posts do localStorage

    posts.sort((a, b) => new Date(b.data) - new Date(a.data)); // Ordenar do mais recente para o mais antigo

    posts.forEach(post => {
        const postagem = document.createElement('div');
        postagem.classList.add('post');
        
        // Cria o HTML da postagem
        postagem.innerHTML = `
            <div class="post-usuario">
                <img src="${post.avatar}" alt="Avatar">
                <strong>${post.nome}</strong>
            </div>
            <p>${post.texto}</p>
            <img src="${post.imagem}" alt="Imagem aleatória">
            <div>
                <button class="botao-curtir" onclick="adicionarCurtidas(${post.id})">
                    Curtir (${post.curtidas})
                </button>
            </div>
        `;
        
        feedContainer.appendChild(postagem);
    });
}

function adicionarCurtidas(postId) {
    const posts = carregaPostsLocalStorage();
    const post = posts.find(p => p.id === postId);
    post.curtidas++;
    salvaPostsNoLocalStorage(posts);
    renderizarPosts();
}

async function adicionarPostagem() {
    const nomeUsuario = document.getElementById('nomeUsuario').value.trim();
    const textoPostagem = document.getElementById('postagem-texto').value.trim();
    
    if (nomeUsuario === '' || textoPostagem === '' || !avatarSelecionado) {
        alert('Por favor, preencha seu nome, a postagem e escolha um avatar.');
        return;
    }

    const imagem = await fetchCatImage();

    const newPost = {
        id: Date.now(), // Usa a data como ID única
        data: new Date(),
        nome: nomeUsuario,
        avatar: avatarSelecionado,
        texto: textoPostagem,
        imagem: imagem,
        curtidas: 0,
    };

    const posts = carregaPostsLocalStorage();
    posts.push(newPost);
    salvaPostsNoLocalStorage(posts); // Salva no localStorage
    document.getElementById('nomeUsuario').value = ''; // Limpar campo de nome
    document.getElementById('postagem-texto').value = ''; // Limpar campo de texto
    avatarSelecionado = null; // Resetar a seleção de avatar
    renderizarPosts(); // Atualiza o feed
}

function carregaPostsLocalStorage() {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
}

function salvaPostsNoLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

botaoPostar.addEventListener('click', adicionarPostagem);

// Carrega as postagens ao carregar a página
window.onload = function() {
    renderizarPosts();
};