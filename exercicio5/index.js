const pessoasQueCurtiram = [];
qtdCurtidas = pessoasQueCurtiram.length;
const paragrafo = document.getElementsByClassName('paragrafo');
const inputNome = document.getElementById('nome');
const botaoCurtir = document.getElementById('botao');

botaoCurtir.addEventListener('click', () => {
    if(pessoasQueCurtiram.indexOf(inputNome.value) >= 0) {
        alert(`O nome ${inputNome.value} já está na lista.`);
    }
    else if((inputNome.value).trim() === '') {
        alert('O nome está vazio.');
    }
    else {
        pessoasQueCurtiram.push(inputNome.value);
        qtdCurtidas = pessoasQueCurtiram.length;
        console.log(pessoasQueCurtiram);
    }

    if(qtdCurtidas === 0) {
        paragrafo[0].innerText = 'Ninguém curtiu ainda!';
    }
    else if(qtdCurtidas === 1) {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]} curtiu!`;
    }
    else if(qtdCurtidas === 2) {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]} e ${pessoasQueCurtiram[1]} curtiram!`;
    }
    else if(qtdCurtidas === 3) {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${qtdCurtidas - 2} pessoa curtiram!`;
    }
    else {
        paragrafo[0].innerText = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${qtdCurtidas - 2} pessoas curtiram!`;
    }
});