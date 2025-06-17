import './index.css';
import jsLogo from './assets/javascript.png';
console.log('Hello World!');

const body = document.body;
const textJS = document.createElement('h1');
textJS.textContent = 'I love JavaScript';

const imgJS = document.createElement('img');
imgJS.src = jsLogo;

body.append(textJS, imgJS);