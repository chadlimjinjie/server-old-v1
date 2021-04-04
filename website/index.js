const express = require('express');
const ReactDOMServer = require('react-dom/server');

const app = express();

// Routes
const login = require('./routes/login');
const register = require('./routes/register');

app.use('/login', login);
app.use('/register', register);

app.get('/', (req, res) => {
  res.send()
})

app.listen(8080, () => {
  console.log('Server running')
})
