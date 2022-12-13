const express = require('express');
const ws = require('ws');

const client = new ws(`ws://localhost:8080`);
const PORT = 3000;
const app = express();
app.get('/', (req, res) => {
  const message = 'User is on home page';
  console.log(`Client send: ${message}`);
  client.send(message);
  res.send(`Home page`);
});
app.get('/disconnect', (req, res) => {
  const message = 'User is on disconnect page';
  console.log(`Client send: ${message}`);
  client.send(message);
  client.close();
  res.send('User disconnected from WSS');
});
app.post('/', (req, res) => {
  console.log(res);
});
client.on('message', (message) => {
  console.log(`Server send: ${message}`);
});
app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
