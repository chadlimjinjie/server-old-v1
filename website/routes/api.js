const express = require('express');
const router = express.Router();

const app = require('../server');

router.get('/', (req, res) => {
  res.json({status:'working'})
});

router.get('*', (req, res) => {
  app.render(req, res, '/index');
});

module.exports = router;