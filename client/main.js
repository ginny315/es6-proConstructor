import Normalize from './public/css/normalize.css';
import MainCss from './public/scss/main.scss';
import Welcome from './components/welcome/welcome.js';

const welcome = Welcome;
console.log('welcome' ,welcome)
console.log(document.getElementById('insertHtml'))
document.getElementById('insertHtml').innerHTML = welcome.welcomeTpl;
welcome.data();




