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

function renderTasks(tasks) {
    const taskList = document.querySelector('.tasks-list');
    for (let task of tasks) {
        const item = createTaskHTML(task);
        taskList.appendChild(item);
    }
}

function createTaskHTML(task) {
    const taskItem = document.createElement('div')
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = task.id;

    const taskItemContainer = document.createElement('div');
    taskItemContainer.className = 'task-item__main-container';

    const taskItemContent = document.createElement('div');
    taskItemContent.className = 'task-item__main-content';

    const checkBoxForm = document.createElement('form');
    checkBoxForm.className = 'checkbox-form';

    const checkBoxFormInput = document.createElement('input');
    checkBoxFormInput.className = 'checkbox-form__checkbox';
    checkBoxFormInput.type = 'checkbox';
    checkBoxFormInput.id = task.id;

    if (task.completed) {
        checkBoxFormInput.checked = true;
    }

    const checkBoxFormLabel = document.createElement('label');
    checkBoxFormLabel.htmlFor = task.id;
    checkBoxForm.append(checkBoxFormInput, checkBoxFormLabel);

    const taskItemText = document.createElement('span')
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = task.text;



    const taskItemDeleteButton = document.createElement('button');
    taskItemDeleteButton.className = 'task-item__delete-button';
    taskItemDeleteButton.classList.add('default-button')
    taskItemDeleteButton.classList.add('delete-button')
    taskItemDeleteButton.innerText = 'Удалить';


    taskItemContent.append(checkBoxForm, taskItemText);
    taskItemContainer.append(taskItemContent, taskItemDeleteButton);
    taskItem.append(taskItemContainer);

    return taskItem;
}

function createTask(event) {
    event.preventDefault();
    const id = Date.now();
    const inputTask = event.target.taskName;
    const inputTaskText = inputTask.value;
    console.log(event.target);
    if (validateTask(id, inputTaskText)) {
        const newTask = {
            id,
            completed: false,
            text: inputTaskText,
        }
        const taskHTML = createTaskHTML(newTask);
        document.querySelector('.tasks-list').append(taskHTML);
        tasks.push(newTask);
    }
}

function deleteTask(event) {
    const modalWindow = document.querySelector('.modal-overlay');
    const { target } = event;
    if (target.classList.contains('task-item__delete-button')) {
        const taskItem = target.closest('.task-item');
        modalWindow.dataset.taskId = taskItem.dataset.taskId;
        toggleDeleteModal()
    }
}

function validateTask(id, inputTaskText) {
    document.querySelectorAll('.error-message-block')?.forEach(block => block.remove());
    const form = document.querySelector('.create-task-block');
    const isValidTask = tasks.every((task) => task?.id !== id && task?.text !== inputTaskText);
    if (!isValidTask) {
        form.append(createErrorHTML(`Задача с таким названием уже существует.`));
        return false;
    } else if (inputTaskText === '') {
        form.append(createErrorHTML(`Название задачи не должно быть пустым`));
        return false;
    }
    return true;
}

function createErrorHTML(text) {
    const errorBlock = document.createElement('span');
    errorBlock.className = 'error-message-block';
    errorBlock.innerText = text;
    return errorBlock;
}

function handleModalClick(event) {
    const modalWindow = document.querySelector('.modal-overlay');
    const taskId = modalWindow.dataset.taskId;
    if (event.target.className.includes('delete-modal__cancel-button')) {
        toggleDeleteModal()
    } else if (event.target.className.includes('delete-modal__confirm-button')) {
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        document.querySelector(`[data-task-id="${taskId}"]`)?.remove();
        tasks.splice(taskIndex, 1);
        toggleDeleteModal()
    }
    modalWindow.removeAttribute('data-task-id');
}

function toggleDeleteModal() {
    modalWindow.classList.toggle('modal-overlay_hidden');
}

function renderDeleteModal() {
    const modalDeleteHTML = document.createElement('div');
    modalDeleteHTML.className = 'modal-overlay modal-overlay_hidden';
    modalDeleteHTML.innerHTML = `<div class="delete-modal">
        <h3 class="delete-modal__question">
            Вы действительно хотите удалить эту задачу?
        </h3>
        <div class="delete-modal__buttons">
            <button class="delete-modal__button delete-modal__cancel-button">
                Отмена
            </button>
            <button class="delete-modal__button delete-modal__confirm-button">
                Удалить
            </button>
        </div>
    </div>`;

    return modalDeleteHTML;
}

function applyThemeStyles(taskList, allButtons) {
    const isDark = document.body.dataset.theme === 'dark';
    const styles = {
        background: isDark ? '#24292E' : 'initial',
        color: isDark ? '#ffffff' : 'initial',
        border: isDark ? '1px solid #ffffff' : 'none'
    };

    document.body.style.background = styles.background;
    taskList.style.color = styles.color;

    allButtons.forEach(button => {
        button.style.border = styles.border;
    });
}

function changeTheme(event) {
    if (event.key !== 'Tab') return;
    const body = document.body;
    const isDarkMode = body.dataset.theme === 'dark';
    body.dataset.theme = isDarkMode ? 'light' : 'dark';

    const taskList = document.querySelector('.tasks-list')
    const allButtons = document.querySelectorAll('button');

    applyThemeStyles(taskList, allButtons);
}

renderTasks(tasks);
document.querySelector('body').dataset.theme = 'light';
document.addEventListener('keyup', changeTheme);

const form = document.querySelector('.create-task-block');
form.addEventListener('submit',  createTask);
const itemList = document.querySelector('.tasks-list')



itemList.addEventListener('click', deleteTask)
document.querySelector('body').append(renderDeleteModal());
const modalWindow = document.querySelector('.modal-overlay');
modalWindow.addEventListener('click', handleModalClick);

