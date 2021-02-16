const express = require('express');
const app = express();

const PORT_NUMBER = 8080;

app.get('/', (req, res) => {
  res.send('<h1>ROOT</h1>');
})

app.get('/test', (req, res) => {
  res.send('<h1>TEST</h1>');
});

app.listen(PORT_NUMBER, () => {
  console.log('Server listen on ' + PORT_NUMBER);
})