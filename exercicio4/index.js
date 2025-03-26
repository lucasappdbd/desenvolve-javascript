const mudaTitulo = (novoTitulo) => {
    const titulo = document.getElementById('titulo-principal');
    titulo.innerText = novoTitulo;
}

setTimeout(() => mudaTitulo('O título foi alterado!!!'), 2000);

const listaDeLi = document.getElementsByTagName('li');

const listaDeCores = ['#D60000', '#05F7AB'];

const listaDeParagrafos = document.getElementsByTagName('p');

const botao = document.getElementsByTagName('button')[0];

setTimeout(() => {
    botao.innerText = 'Clique no novo texto!';
    botao.style.fontSize = '24px';
}, 2000);

for(let paragrafo of listaDeParagrafos) {
    paragrafo.classList = 'paragrafo';
}

for(let li in listaDeLi) {
    listaDeLi[li].style.color = listaDeCores[li];
}