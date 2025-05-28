const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

function createTasks(tasks) {
    tasks.forEach((task) => {
        createTaskHTML(task.id, task.completed, task.text);
    })
};

function createTaskHTML(id, completed, text) {
    
    const taskItem = document.createElement('div')
    taskItem.className = 'task-item'
    taskItem.dataset.taskId = id;

    const taskItemContainer = document.createElement('div');
    taskItemContainer.className = 'task-item__main-container';

    const taskItemContent = document.createElement('div');
    taskItemContent.className = 'task-item__main-content';

    const checkBoxForm = document.createElement('form');
    checkBoxForm.className = 'checkbox-form';

    const checkBoxFormInput = document.createElement('input');
    checkBoxFormInput.className = 'checkbox-form__checkbox';
    checkBoxFormInput.type = 'checkbox';
    checkBoxFormInput.id = id;

    if (completed) {
        checkBoxFormInput.checked = true;
    }

    const checkBoxFormLabel = document.createElement('label');
    checkBoxFormLabel.htmlFor = id;
    checkBoxForm.append(checkBoxFormInput, checkBoxFormLabel);

    const taskItemText = document.createElement('span')
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = text;

    

    const taskItemDeleteButton = document.createElement('button');
    taskItemDeleteButton.className = 'task-item__delete-button';
    taskItemDeleteButton.classList.add('default-button')
    taskItemDeleteButton.classList.add('delete-button')
    taskItemDeleteButton.innerText = 'Удалить';


    taskItemContent.append(checkBoxForm, taskItemText);
    taskItemContainer.append(taskItemContent, taskItemDeleteButton);
    taskItem.append(taskItemContainer);

    const tasksList = document.querySelector('.tasks-list');
    tasksList.append(taskItem);

}

function getUniqueId() {
    return Date.now();
}

function addNewTask() {
    event.preventDefault();
    const newId = getUniqueId();
    const inputTask = event.target.taskName;
    const inputTaskText = inputTask.value;
    const isCompleted = false;
    const newTask = {
        id: newId,
        completed: isCompleted,
        text: inputTaskText,
    }
    if (validateTask(newId, inputTaskText)) {
        createTaskHTML(newId, isCompleted, inputTaskText);
        tasks.push(newTask);
    }
    // console.log(tasks)

}

function validateTask(id, inputTaskText) {
    document.querySelectorAll('.error-message-block')?.forEach(block => block.remove());
    const isValidTask = tasks.every((task) => task?.id !== id && task?.text !== inputTaskText);
    if (!isValidTask) {
        errorSpan(`Задача с таким названием уже существует.`)
        return false;
    } else if (inputTaskText === '') {
        errorSpan(`Название задачи не должно быть пустым`)
        return false;
    }
    return true;
}

function errorSpan(text) {
    const errorBlock = document.createElement('span');
    errorBlock.className = 'error-message-block';
    errorBlock.innerText = text;
    const form = document.querySelector('.create-task-block');
    form.append(errorBlock);
}

createTasks(tasks);

const form = document.querySelector('.create-task-block');
form.addEventListener('submit',  addNewTask);