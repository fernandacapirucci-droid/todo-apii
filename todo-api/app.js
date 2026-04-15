const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    taskRoutes(req, res);
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});