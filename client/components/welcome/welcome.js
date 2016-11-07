import me from '../../asserts/images/me.jpg';
"use strict";
export default {
    data() {
        fetch('../components/welcome/welcome.json')
        .then(function(response) {
            return response.text()
        }).then(function(newHTML) {
            console.log(newHTML);
        })
        document.write('<span>This is welcome component</span>');
        document.write('<img src="'+me+'">');
    }
}