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

/* <div class="task-item" data-task-id="1">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                <label for="task-1"></label>
            </form>
            <span class="task-item__text">
                Посмотреть новый урок по JavaScript
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button">
            Удалить
        </button>
    </div>
</div> */

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

    console.log(completed)
    if (completed) {
        checkBoxFormInput.checked = true;
    }

    checkBoxFormInput.addEventListener('click', () =>{
        tasks.forEach((task) => {
            if (task.id === checkBoxFormInput.id) {
                task.completed = !task.completed;
            };
        })
        console.log(tasks);
    })
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
    taskItemDeleteButton.addEventListener('click', () => {
        document.querySelector(`[data-task-id="${id}"]`).remove();
        const index = tasks.findIndex((task) => task.id === id);
        tasks.splice(index, 1);
        console.log(tasks)
    })


    taskItemContent.append(checkBoxForm, taskItemText);
    taskItemContainer.append(taskItemContent, taskItemDeleteButton);
    taskItem.append(taskItemContainer);

    const tasksList = document.querySelector('.tasks-list');
    tasksList.append(taskItem);

}

function generateUniqueId(tasks) {
    let id;
    do {
        id = Math.floor(Math.random() * 1000000);
    } while (tasks.some(task => task.id === id));
    return id;
}

createTasks(tasks);
const addTaskButton = document.querySelector('.create-task-block__button.default-button');
addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const id = generateUniqueId(tasks);
    const inputName = document.querySelector('input[name="taskName"]');
    
    const inputNameText = inputName ? inputName.value : 'Пустая задача';

    const newTask = {
        id,
        completed: false,
        text: inputNameText,
    };

    tasks.push(newTask);
    createTaskHTML(newTask.id, newTask.completed, newTask.text);
    console.log(tasks);
    
});

