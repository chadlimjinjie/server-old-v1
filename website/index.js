from express import 'express';
from ReactDOMServer import

const app = express();

app.get('/', (req, res) => {
  res.send(1+1)
})

app.listen(8080, '0.0.0.0', () => {
  console.log('Server running')
})