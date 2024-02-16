const express = require('express');
var cors = require('cors');

const usersRoute = require('./routes/users');
const booksRoute = require('./routes/books');
const favBooksRoute = require('./routes/favBooks');
const friendsRoute = require('./routes/friendUsers');
const notifsRoute = require('./routes/notifs');
const ownedBooksRoute = require('./routes/ownedBooks');
const wishedBooksRoute = require('./routes/wishedBooks');
const reviewsRoute = require('./routes/reviews');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', usersRoute);
app.use('/books', booksRoute);
app.use('/fav', favBooksRoute);
app.use('/wish', wishedBooksRoute);
app.use('/own', ownedBooksRoute);
app.use('/friends', friendsRoute);
app.use('/notif', notifsRoute);
app.use('/revs', reviewsRoute);


module.exports = app;