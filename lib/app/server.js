var serveStatic = require('serve-static')
var http = require('http')
var path = require('path')
var colors = require('colors')
var finalhandler = require('finalhandler')
var os = require('os')

module.exports = function(cwd, args, callback) {

    var port = args.hasOwnProperty('p') ? args.p : 4000 

    var serve = serveStatic(cwd, {
        'index': ['index.html', 'index.htm']
    })

    var server = http.createServer(function(req, res) {
        var done = finalhandler(req, res)
        serve(req, res, done)
    })

    server.listen(port)
    console.log('Your project is running at ' + ('http://'+getIp()+':' + port).underline)
}

function getIp(){
    var ifaces = os.networkInterfaces();
    var ipAddress = 'localhost';
    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details) {
            if (details.family == 'IPv4' && !details.internal) {
                ipAddress = details.address;
            }
        });
    }
    return ipAddress;
}
