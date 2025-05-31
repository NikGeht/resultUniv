class CustomSelect {
    #id;
    #options;
    #currentSelectedOption;

    constructor(id, options) {
        this.#id = id,
        this.#options = options
    }

    get getCurrentSelectedOption () {
        const key = this.#currentSelectedOption;
        return this.#options.filter((option) => option.value === Number(key));
    }

    #createBlocksDropDown(type, className) {
        const block = document.createElement(type);
        block.className = className;
        block.classList.add(`${className}--${this.#id}`);
        return block;
    }
    #bindElements () {
        const dropDownButton = document.querySelector(`.select-dropdown__button--${this.#id}`)
        dropDownButton.addEventListener('click', (e) => {
            document.querySelector(`.select-dropdown__list--${this.#id}`).classList.toggle('active');
            e.stopPropagation();
            
        })
        const body = document.querySelector('body');
        body.addEventListener('click', (e) => {
            if (!e.target.classList.contains(`select-dropdown__list-item--${this.#id}` || !e.target.classList.contains(`select-dropdown__button--${this.#id}`))) {
                document.querySelector(`.select-dropdown__list--${this.#id}`).classList.remove('active');
            }
        })
        const dropDownList = document.querySelector(`.select-dropdown__list--${this.#id}`);
        dropDownList.addEventListener('click', (e) => {

            document.querySelector(`.select-dropdown__list--${this.#id}`).querySelectorAll(`.select-dropdown__list-item`).forEach((item) => {
                item.classList.remove('selected');
            })

            const idItem = e.target.dataset.value;
            this.#currentSelectedOption = idItem;

            const dropDownText = document.querySelector(`.select-dropdown__text--${this.#id}`);
            dropDownText.innerText = e.target.innerText;

            e.target.classList.add('selected');
            console.log(this.getCurrentSelectedOption);
            e.stopPropagation();
        })
    }
    #createListItemsFromOptions() {
        const arrListItems = [];
        this.#options.forEach((item) => {
            const elem = document.createElement('li');
            elem.className = 'select-dropdown__list-item';
            elem.dataset.value = item.value;
            elem.innerText = item.text;
            arrListItems.push(elem);
        })
        return arrListItems;
    }

    render(container) {
       const selectDropdown = this.#createBlocksDropDown('div', 'select-dropdown');
       const dropDownButton = this.#createBlocksDropDown('button', 'select-dropdown__button');
       const dropDownText = this.#createBlocksDropDown('span', 'select-dropdown__text');
       dropDownText.innerText = 'Выберите элемент';
       const dropDownList = this.#createBlocksDropDown('ul', 'select-dropdown__list');
       const arrListItems = this.#createListItemsFromOptions();
       
       dropDownList.append(...arrListItems);
       dropDownButton.append(dropDownText);

       selectDropdown.append(dropDownButton, dropDownList);
       container.append(selectDropdown);

       this.#bindElements();
    }
}



const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const options1 = [
    { value: 1, text: 'asd' },
    { value: 2, text: 'asq' },
    { value: 3, text: 'rrrr' },
    { value: 4, text: 'eeee' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('123', options);
const customSelect1 = new CustomSelect('125', options1);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
customSelect1.render(mainContainer);