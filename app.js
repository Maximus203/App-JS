const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.write('<h1>Hello everyone</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Le serveur est lancer sur cette adresse: http://${hostname}:${port}/`);
});