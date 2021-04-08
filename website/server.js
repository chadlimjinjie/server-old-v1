const express = require('express');
const next = require('next');

const api = require('./routes/api');

const server = express();
server.use(express.json());

const DEV = false;
const PORT = 8080;

const app = next({ dev:DEV, dir:'./website' });
const handle = app.getRequestHandler(); 

app.prepare();

server.use('/api', api);

server.get('/', (req, res) => {
  app.render(req, res, '/index');
});

server.get('/register', (req, res) => {
  console.log(req.query);
  app.render(req, res, '/Register');
});

server.get('*', (req, res) => {
  handle(req, res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`server running http://localhost:${PORT}`);
});

module.exports = app;