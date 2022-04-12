require('env2')('./config.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./router');

const app = express();

const {
  env: { PORT, NODE_ENV },
} = process;
app.use(router);

app.set('port', PORT || 4000);
app.disable('x-powered-by');

app.use([compression(), express.urlencoded({ extended: true }), express.json()]);

app.use('/api/v1/', router);

if (NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
