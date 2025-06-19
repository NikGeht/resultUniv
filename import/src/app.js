import { getRandomColor } from './utils';

export function initApp() {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Изменить цвет страницы';

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    })
    document.body.append(button);
}