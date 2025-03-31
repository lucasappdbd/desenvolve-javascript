// Carrega o array do localStorage ou cria um array vazio se não existir
let pessoasQueCurtiram = JSON.parse(localStorage.getItem('pessoasQueCurtiram'));
if (!Array.isArray(pessoasQueCurtiram)) {
  pessoasQueCurtiram = [];
}

let qtdCurtidas = pessoasQueCurtiram.length;

const paragrafo = document.getElementsByClassName('paragrafo');
const inputNome = document.getElementById('nome');
const botaoCurtir = document.getElementById('botao');
const botaoApagar = document.getElementById('apagar');

// Atualiza o número de curtidas
function atualizarCurtidas() {
    if (qtdCurtidas === 0) {
        paragrafo[0].innerText = 'Ninguém curtiu ainda!';
    } else if (qtdCurtidas === 1) {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]} curtiu!`;
    } else if (qtdCurtidas === 2) {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]} e ${pessoasQueCurtiram[1]} curtiram!`;
    } else if (qtdCurtidas === 3) {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${qtdCurtidas - 2} pessoa curtiram!`;
    } else {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${qtdCurtidas - 2} pessoas curtiram!`;
    }
}

// Salva o array no localStorage
function salvarCurtidasNoStorage() {
    localStorage.setItem('pessoasQueCurtiram', JSON.stringify(pessoasQueCurtiram));
}

// Configura o botão curtir
botaoCurtir.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    if (pessoasQueCurtiram.indexOf(nome) >= 0) {
        alert(`O nome ${nome} já está na lista.`);
    } else if (nome === '') {
        alert('O nome está vazio.');
    } else {        
        pessoasQueCurtiram.push(nome);
        qtdCurtidas = pessoasQueCurtiram.length;
        salvarCurtidasNoStorage();
    }
    atualizarCurtidas();
});

// Configura o botão apagar
botaoApagar.addEventListener('click', () => {
    localStorage.clear();
    pessoasQueCurtiram = [];
    paragrafo[0].innerText = 'Ninguém curtiu ainda!';
});

// Atualiza as curtidas ao carregar a página
atualizarCurtidas();