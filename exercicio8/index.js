// Carrega o array do localStorage ou cria um array vazio se não existir
let tarefas = JSON.parse(localStorage.getItem('tarefas'));
if (!Array.isArray(tarefas)) {
  tarefas = [];
};

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

        const botaoApagar = document.createElement('button');
        botaoApagar.classList.add('botao-apagar');
        botaoApagar.textContent = 'Apagar';
        botaoApagar.addEventListener('click', () => apagarTarefa(indice));

        itemTarefa.appendChild(checkbox);
        itemTarefa.appendChild(textoTarefa);
        itemTarefa.appendChild(botaoApagar);

        container.appendChild(itemTarefa);     
    });
}

// Salva o array no localStorage
function salvarTarefasNoStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));    
    renderizarTarefas();
}

// Função apagar tarefa
function apagarTarefa(indice) {
    tarefas.splice(indice, 1);    
    renderizarTarefas();
    salvarTarefasNoStorage();
}

// Alterar o status da tarefa
function alternarStatus(indice) {
    tarefas[indice].status = !tarefas[indice].status;    
    renderizarTarefas();
    salvarTarefasNoStorage();
}

// Função Adicionar tarefa
function adicionarTarefa() {
    const novaTarefaInput = document.getElementById('nova-tarefa');
    const descricao = novaTarefaInput.value.trim();
    if (descricao) {
        tarefas.push({ descricao, status: false });
        novaTarefaInput.value = ''; // limpa o input
        renderizarTarefas();
        salvarTarefasNoStorage();
    }
}

// Botão adicionar tarefa
document.getElementById('adicionar-tarefa').addEventListener('click', adicionarTarefa);

// Carrega as tarefas ao carregar a página
renderizarTarefas();