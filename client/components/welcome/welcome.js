//document.write('This is welcome component');
"use strict";
export default {
    data() {
        fetch('../components/welcome/welcome.html')
    .then(function(response) {
        return response.text()
    }).then(function(newHTML) {
        document.write(newHTML);
    })
        document.write('<span>This is welcome component</span>');
    }
}