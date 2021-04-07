const express = require('express');
const next = require('next');

const server = express();
server.use(express.json());

const PORT = 8080;

const app = next({ dev:true, dir:'./website' });
const handle = app.getRequestHandler(); 

app.prepare();

server.get('/', (req, res) => {
  app.render(req, res, '/index');
});

server.get('*', (req, res) => {
  handle(req, res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`server running http://localhost:${PORT}`);
});