const http = require('http');



http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });

        let output = {
            name: 'Jesús',
            age: 24,
            url: request.url
        };

        response.write(JSON.stringify(output));
        //response.write('Hola mundo');
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');