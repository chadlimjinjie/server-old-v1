const express = require('express');
const router = express.Router();

const app = require('../server');
const connection = require('../db');

console.log('connection', connection);

router.get('/', (req, res) => {
  res.json({status:'working'})
});

router.get('/users', (req, res) => {
  connection.query('SELECT first_name, last_name FROM users', (error, result) => {
    console.log('error', error);
    console.log('result', result);
    if (!error) {
      res.json(result);
    } else {
      res.status(500).json(error);
    }
  });
});

router.get('/users/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`SELECT first_name, last_name FROM users WHERE user_id=${id}`, (error, result) => {
    console.log('error', error);
    console.log('result', result);
    if (!error) {
      res.json(result[0]);
    } else {
      res.status(500).json(error);
    }
  });
});

router.get('/test', (req, res) => {
  app.render(req, res, '/index');
});

module.exports = router;