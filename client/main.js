import Normalize from './public/css/normalize.css';
import MainCss from './public/scss/main.scss';
import Welcome from './components/welcome/welcome.js';

const welcome = Welcome.data();
document.getElementById('insertHtml').html(welcome);




