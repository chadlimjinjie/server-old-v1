import express from 'express';
import ReactDOMServer from 'react-dom';

const app = express();

// Views
import Index from './src/index.js';

// Routes
import login from './routes/login.js';
import register from './routes/register.js';

app.use('/login', login);
app.use('/register', register);

app.get('/', (req, res) => {
  res.send(ReactDOMServer.renderToString(<Index />))
})

app.listen(8080, () => {
  console.log('Server running')
})
