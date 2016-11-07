import welcomeTpl from './welcome.html';
import me from '../../asserts/images/me.jpg';
import welcomeStyle from './welcome.scss';
"use strict";
export default {
    welcomeTpl,
    data() {
        fetch('../components/welcome/welcome.json')
        .then(function(response) {
            return response.text()
        }).then(function(newHTML) {
            console.log(newHTML);
        })
        //document.write('<img src="'+me+'">');
        console.log('123',document.getElementById('myImg'))
        document.getElementById('myImg').setAttribute('src',me);
    }
}