const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req)
    res.write("Bienvenue tout le monde !")
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Le serveur est lancer sur cette adresse: http://${hostname}:${port}/`);
});