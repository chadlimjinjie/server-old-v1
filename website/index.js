const express = require('express');
const path = require('path');

const app = express();

// Routes
const login = require('./routes/login');
const register = require('./routes/register');

app.use('/login', login);
app.use('/register', register);

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'website', 'public', 'index.html'))
})

app.listen(8080, () => {
  console.log('Server running')
})
