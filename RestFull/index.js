const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const NeDB = require('nedb');

const db = new NeDB({
  filename: 'users.db',
  autoload: true
});

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign().include('routes').include('utils').into(app, db);

app.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando!');
});