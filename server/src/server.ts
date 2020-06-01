/* eslint-disable no-console */
import express from 'express';

const app = express();

const version = process.env.VERSION || '^1.0.0';

app.get('/', (req, res) => {
  res.json({
    App: 'ECOleta\'s back-end API',
    Status: 'Development',
    Version: `${version}`,
    Author: 'Ricardo Morato Rocha',
    LinkedIn: 'https://www.linkedin.com/in/ricardo-morato-673576108/',
    Github: 'https://github.com/RicardoMorato',
  });
});

app.get('/users', (req, res) => {
  res.send('Hello World!');
  console.log('Listagem de usuários!');
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
