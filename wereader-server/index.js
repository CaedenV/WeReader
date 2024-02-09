const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const users = require('./users');
const books = require('./books');
const favbooks = require('./favbooks');
const friendusers = require('./friendusers');
const notifs = require('./notifs');
const ownedbooks = require('./ownedbooks');
const reviews = require('./reviews');
const wishedbooks = require('./wishedbooks');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'readers',
  password : 'H2Mp9ZzqXk4T001?',
  database : 'wereader'
});

connection.connect();

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', users(connection))
  .use('/api', books(connection))
  .use('/api', favbooks(connection))
  .use('/api', wishedbooks(connection))
  .use('/api', ownedbooks(connection))
  .use('/api', friendusers(connection))
  .use('/api', notifs(connection))
  .use('/api', reviews(connection));

app.listen(3306, () => {
  console.log('Express server listening on port 3306');
});