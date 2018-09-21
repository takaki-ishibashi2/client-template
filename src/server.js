const express = require('express');
const path = require('path');
const server = express();
const PORT = 8081;
require('dotenv').config();

server.use(express.static(path.join(__dirname)));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const listener = server.listen(process.env.PORT || 1234, () => {
  console.log(`Listenning on port ${listener.address().port}`);
});
