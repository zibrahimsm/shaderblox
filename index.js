const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const httpsOptions = {
  key: fs.readFileSync(path.resolve('private.key')),
  cert: fs.readFileSync(path.resolve('certificate.crt')),
  ca: fs.readFileSync(path.resolve('ca_bundle.crt'))
};

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

https.createServer(httpsOptions, app).listen(443);
