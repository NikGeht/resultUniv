import './index.css';
console.log('Hello World!');

const body = document.body;
const textJS = document.createElement('h1');
textJS.textContent = 'I love JavaScript';

const imgJS = document.createElement('img');
imgJS.src = 'assets/javascript.png';

body.append(textJS, imgJS);
