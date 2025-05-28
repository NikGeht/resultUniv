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

// ФОРМИРОВАНИЕ БЛОКОВ ЗАДАЧ, ДОБАВЛЕНИЕ, УДАЛЕНИЕ БЛОКОВ

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

function deleteTask() {
    const isDeleteButton = event.target.className.includes('task-item__delete-button');
    if (isDeleteButton) {
        const currentTask = event.target.closest('.task-item');
        const taskId = currentTask.dataset.taskId;
        
        showBlockModalDelete(taskId);
    }
}
/*Что-то я не знаю, оно работает, но меня напрягает, 
что я получается между коллбэками прокидываю taskId
Хотя по хорошему, если функция названа deleteTask, то там и удалять.

Я сначала сделал, что в коллбэке deleteTask объявлял коллбэк на модальное окно,
но там получается небольшое зацикливание происходит и это неправильно. Сейчас лучше, но мне не нравится костыльность.

*/

// ВАЛИДАЦИЯ И ОШИБКА

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

// МОДАЛЬНОЕ ОКНО

function handleModalClick(event) {
    const modalWindow = document.querySelector('.modal-overlay');
    const taskId = modalWindow.dataset.taskId;
    if (event.target.className.includes('delete-modal__cancel-button')) {
        modalWindow.classList.add('modal-overlay_hidden');
    } else if (event.target.className.includes('delete-modal__confirm-button')) {
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        document.querySelector(`[data-task-id="${taskId}"]`)?.remove();
        tasks.splice(taskIndex, 1);
        console.log(taskIndex);
        modalWindow.classList.add('modal-overlay_hidden');
    }
}

function showBlockModalDelete(taskId) {
    modalWindow.classList.remove('modal-overlay_hidden');
    modalWindow.dataset.taskId = taskId;
    console.log(modalWindow);
}

function createBlockModalDelete() {
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

// ТЕМНАЯ ТЕМА

/*
Но мне кажется лучше было бы добавить нужным элементам класс dark-theme и таким образом все делать, а с кода убрать явную стилизацию.
*/

function changeTheme(event) {
    if (event.key === 'Tab'){
        const body = document.querySelector('body');
        
        const allTaskItems = document.querySelectorAll('.tasks-item, .task-item *')
        const allButtons = document.querySelectorAll('button');
        console.log(allTaskItems);
        body.dataset.theme === 'light' ? body.dataset.theme = 'dark' : body.dataset.theme = 'light';
        if (body.dataset.theme === 'dark'){
            body.style.background = '#24292E';
            allTaskItems.forEach((task) => {
                task.style.color = '#ffffff';
            });
            allButtons.forEach((button) => button.style.border = '1px solid #ffffff')
        } else if (body.dataset.theme === 'light') {
            document.querySelector('body').style.background = 'initial';
            allTaskItems.forEach((task) => {
                task.style.color = 'initial';
            });
            allButtons.forEach((button) => button.style.border = 'none')
        }

        
    }
}

createTasks(tasks);
document.querySelector('body').dataset.theme = 'light';
document.addEventListener('keyup', changeTheme);

const form = document.querySelector('.create-task-block');
form.addEventListener('submit',  addNewTask);
const itemList = document.querySelector('.tasks-list')
itemList.addEventListener('click', deleteTask)
document.querySelector('.tasks-list').append(createBlockModalDelete());
const modalWindow = document.querySelector('.modal-overlay');
modalWindow.addEventListener('click', handleModalClick);