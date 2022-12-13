const WebSocketServer = require('ws');

const port = 8080;
const wss = new WebSocketServer.Server({ port });

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.send('You are connected');
  ws.on('message', (message) => {
    console.log('Client send message:', message.toString());
    ws.send('Message received');
  });

  ws.on('close', () => {
    console.log('Client was dicconnected');
  });
});
console.log('WSS started on port', port);
