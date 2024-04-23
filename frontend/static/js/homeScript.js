// Função para buscar e exibir as tarefas do backend
async function fetchTasks() {
    try {
        const response = await axios.get('/api/todos/');
        const tasks = response.data;

        const taskListContainer = document.getElementById('taskListContainer');
        taskListContainer.innerHTML = ''; // Limpa o conteúdo atual

        if (tasks.length > 0) {
            taskListContainer.style.display = 'block'; // Mostra a lista de tarefas
            tasks.forEach(task => {
                const taskElement = createTaskElement(task);
                taskListContainer.appendChild(taskElement);
            });
        } else {
            taskListContainer.style.display = 'none'; // Oculta a lista se não houver tarefas
        }
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }
}

function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task card mb-3';

    const cardBody = createCardBody(task);
    taskElement.appendChild(cardBody);

    return taskElement;
}

function createCardBody(task) {
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex justify-content-between align-items-center';
    cardBody.style.alignContent = 'flex-start'; // Alinha os itens ao topo

    const taskNameSpan = document.createElement('span');
    taskNameSpan.textContent = task.taskName;

    const doneIndicator = createDoneIndicator(task.taskDone);
    cardBody.appendChild(doneIndicator);

    /*     const checkIcon = createCheckIcon();
        cardBody.appendChild(checkIcon); */

    cardBody.appendChild(taskNameSpan);

    const buttonContainer = createButtonContainer(task);
    cardBody.appendChild(buttonContainer);

    return cardBody;
}

function createDoneIndicator(taskDone) {
    const doneIndicator = document.createElement('span');
    doneIndicator.textContent = taskDone ? ' (Concluída)' : ' (Pendente)';
    doneIndicator.style.color = taskDone ? 'green' : 'red';
    return doneIndicator;
}

// add ícone que indica que tarefa foi criada
function createCheckIcon() {
    const checkIcon = document.createElement('i');
    checkIcon.className = 'fas fa-check-circle';
    checkIcon.style.color = 'green';
    checkIcon.style.marginLeft = '5px';
    return checkIcon;
}

function createButtonContainer(task) {
    const buttonContainer = document.createElement('div');

    const completeButton = createCompleteButton(task);
    buttonContainer.appendChild(completeButton);

    const deleteButton = createDeleteButton(task);
    buttonContainer.appendChild(deleteButton);

    return buttonContainer;
}

// Parte relacionada à funcionalidade (adicionar eventos aos botões)
function createCompleteButton(task) {
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluir';
    completeButton.className = 'btn btn-success btn-sm';
    completeButton.style.marginRight = '5px';
    completeButton.addEventListener('click', () => completeTask(task.id));
    return completeButton;
}

function createDeleteButton(task) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.addEventListener('click', () => deleteTask(task.id));
    return deleteButton;
}

// Funções fictícias para simular ações de conclusão e exclusão de tarefas
function completeTask(taskId) {
    console.log(`Tarefa com ID ${taskId} concluída!`);
}

function deleteTask(taskId) {
    console.log(`Tarefa com ID ${taskId} deletada!`);
}


// Função para adicionar uma nova tarefa
async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName) {
        try {
            const response = await axios.post('/api/todos/', { taskName: taskName });
            const newTask = response.data;

            // Limpa o campo de entrada
            taskInput.value = '';

            // Atualiza a lista de tarefas
            fetchTasks();
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
        }
    } else {
        alert('O nome da task é obrigatório.');
    }
}

// Função para deletar uma tarefa
async function deleteTask(taskId) {
    const confirmDelete = confirm('Tem certeza que deseja deletar esta tarefa?');
    if (confirmDelete) {
        try {
            await axios.delete(`/api/todos/${taskId}/`);

            // Atualiza a lista de tarefas após deletar
            fetchTasks();
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    }
}

// Função para marcar uma tarefa como concluída
async function completeTask(taskId) {
    console.log('Task ID:', taskId); // Check the value of taskId

    try {
        await axios.put(`/api/todos/${taskId}/mark_as_done/`);

        // Atualiza a lista de tarefas após marcar como concluída
        fetchTasks();
    } catch (error) {
        console.error('Erro ao marcar tarefa como concluída:', error);
    }
}

// Função para editar o nome de uma tarefa
async function editTask(taskId) {
    const newName = prompt('Digite o novo nome da tarefa:');
    if (newName !== null && newName.trim() !== '') {
        try {
            const response = await axios.put(`/api/todos/${taskId}/`,);
            console.log('Tarefa editada com sucesso:', response.data);

            // Atualiza a lista de tarefas após a edição
            fetchTasks();
        } catch (error) {
            console.error('Erro ao editar tarefa:', error);
        }
    } else {
        console.error('O novo nome da tarefa não é válido.');
    }
}

// Chamada inicial para buscar e exibir as tarefas
fetchTasks();