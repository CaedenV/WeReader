const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function createRouter(db) {
  const router = express.Router();

  router.post('/api/books', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let book = decoded.body;
      let sql = 'INSERT INTO books SET ?';
      db.query(sql, book, (err, result) => {
        if (err) throw err;
        res.send('Book added...');
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  router.get('/api/books/:sParam', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let sql = `SELECT * FROM books WHERE ? = ?`;
      db.query(sql, [decoded.params.sParam, decoded.body.sQuery], (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  router.get('/api/books/:id', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let sql = `SELECT * FROM books WHERE id = ?`;
      db.query(sql, [decoded.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  router.put('/api/books/:id', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let book = decoded.body.book;
      let bookId = decoded.params.id;
      let sql = `UPDATE books SET ? WHERE id = ${bookId}`;
      db.query(sql, book, (err, result) => {
        if (err) throw err;
        res.send('Book updated...');
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }

  });

  return router;
}

module.exports = createRouter;