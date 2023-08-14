// Create web server
var server = http.createServer(function (req, res) {
    console.log('Request received: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
});

// Start listening
server.listen(8080, function () {
    console.log('Listening on port 8080');
});