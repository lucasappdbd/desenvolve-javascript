// Função que calcula tempo restante até uma data futura

const calcularTempoRestante = (dataFutura) => {
    const agora = new Date().getTime();
    const diferencaDeDatas = dataFutura - agora;
    const segundosDeUmMinuto = 60 * 1000;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;    
    const segundosDoDia = 24 * segundosDeUmaHora;

    const dias = Math.floor(diferencaDeDatas / segundosDoDia);
    const horas = Math.floor((diferencaDeDatas % segundosDoDia) / segundosDeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosDeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000);
    return {
        dias,
        horas,
        minutos,
        segundos
    }
}

// Função que atualiza o temporizador
const atualizarTemporizador = () => {
    const dataFutura = new Date('2026-01-01T00:00:00').getTime();
    const tempoRestante = calcularTempoRestante(dataFutura);
    
    document.getElementById('dias').innerText = `Dias ${tempoRestante.dias}`;
    document.getElementById('horas').innerText = `Horas ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${tempoRestante.segundos}`;
}


const intervalo = setInterval(atualizarTemporizador, 1000);

atualizarTemporizador();