var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 1338;
var serveStatic = require('serve-static');

 app.use(express.static('lib'));
 app.use(express.static('app'));
 app.use(express.static('templates'));
 

//Home
// app.get('*', function(req, res) 
// { 
//     res.sendFile(__dirname + '/templates/index.html');
//     //res.sendFile(__dirname + '/app/html/min/outer.html');
// })


//app.use(serveStatic(__dirname, {'index': ['/templates/index.html']}))

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode

    var path = __dirname + '/templates';
    res.sendFile('index.html', { root: path });
})



//Service Provider Profile View

//Login View

//Register View

.listen(port);


// var server = http.createServer(function(request, response) {
//     console.log('request starting...');
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });
//server.listen(port);
//res.send('Hello World');

console.log("Server running at http://localhost:%d", port);