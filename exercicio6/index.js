// Cria o array que armazena as tarefas
let tarefas = [];

// Gera os elementos HTML da div lista de tarefas
function renderizarTarefas() {
    const container = document.getElementById('container-tarefas');
    container.innerHTML = ''; // Limpa a lista

    tarefas.forEach((tarefa, indice) => {
        const itemTarefa = document.createElement('div');
        itemTarefa.classList.add('item-tarefa');
        if (tarefa.status) itemTarefa.classList.add('concluida');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => alternarStatus(indice));

        const textoTarefa = document.createElement('span');
        textoTarefa.classList.add('texto-tarefa');
        textoTarefa.textContent = tarefa.descricao;

        itemTarefa.appendChild(checkbox);
        itemTarefa.appendChild(textoTarefa);

        container.appendChild(itemTarefa);
    });
}

// Alterar o status da tarefa
function alternarStatus(indice) {
    tarefas[indice].status = !tarefas[indice].status;
    renderizarTarefas();
}

// Função Adicionar tarefa
function adicionarTarefa() {
    const novaTarefaInput = document.getElementById('nova-tarefa');
    const descricao = novaTarefaInput.value.trim();
    if (descricao) {
        tarefas.push({ descricao, status: false });
        novaTarefaInput.value = ''; // limpa o input
        renderizarTarefas();
    }
}

document.getElementById('adicionar-tarefa').addEventListener('click', adicionarTarefa);