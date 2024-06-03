document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const renderTasks = () => {
        todoList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            const span = document.createElement('span');
            span.textContent = task.text;
            span.addEventListener('click', () => toggleTaskCompleted(index));
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit';
            editButton.addEventListener('click', () => editTask(index));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(index));
            li.append(span, editButton, deleteButton);
            todoList.appendChild(li);
        });
    };

    const addTask = (text) => {
        tasks.push({ text, completed: false });
        saveTasks();
        renderTasks();
    };

    const editTask = (index) => {
        const newText = prompt('Edit task:', tasks[index].text);
        if (newText !== null && newText.trim() !== '') {
            tasks[index].text = newText.trim();
            saveTasks();
            renderTasks();
        }
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    const toggleTaskCompleted = (index) => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    };

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newTaskText = newTaskInput.value.trim();
        if (newTaskText !== '') {
            addTask(newTaskText);
            newTaskInput.value = '';
        }
    });

    renderTasks();
});
