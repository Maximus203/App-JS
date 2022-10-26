const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Bonjour a toute la team meta</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Le serveur est lancer sur cette adresse: http://${hostname}:${port}/`);
});