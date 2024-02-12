const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');

const users = require('./routes/users');
const books = require('./routes/books');
const favbooks = require('./routes/favBooks');
const friendusers = require('./routes/friendUsers');
const notifs = require('./routes/notifs');
const ownedbooks = require('./routes/ownedBooks');
const wishedbooks = require('./routes/wishedBooks');
const reviews = require('./routes/reviews');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect();

const router = express.Router();

router.use('/users', users(connection));
router.use('/books', books(connection));
router.use('/favbooks', favbooks(connection));
router.use('/friendusers', friendusers(connection));
router.use('/notifs', notifs(connection));
router.use('/ownedbooks', ownedbooks(connection));
router.use('/reviews', reviews(connection));
router.use('/wishedbooks', wishedbooks(connection));

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', router);

app.listen(3306, () => {
  console.log('Express server listening on port 3306');
});