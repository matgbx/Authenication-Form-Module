const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../dist/')));
app.get('*', (req, res) => res.sendfile('../dist/index.html'));
app.use(parser.json());

module.exports = app;
