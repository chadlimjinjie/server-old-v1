const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Register home page')
})

module.export = router;