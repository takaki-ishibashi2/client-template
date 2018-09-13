const express = require('express');
const path = require('path');
const server = express();
const PORT = 8081;

server.use(express.static(path.join(__dirname)));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Listenning on ${PORT}`);
});
