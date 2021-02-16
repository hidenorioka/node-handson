const express = require('express');
const app = express();

const PORT_NUMBER = 8080;

// ルーティング設定
app.get('/', (req, res) => {
  // HTMLファイルを返却
  res.sendFile(`${__dirname}/index.html`);
})

app.get('/getJson', (req, res) => {
  const data = {
    'message': 'hello',
    'date': '2021-02-17',
  }

  res.json(data);
})

app.listen(PORT_NUMBER, () => {
  console.log('Server listen on ' + PORT_NUMBER);
})