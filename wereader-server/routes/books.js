const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/api/books', (req, res) => {
    let book = req.body;
    let sql = 'INSERT INTO books SET ?';
    db.query(sql, book, (err, result) => {
      if (err) throw err;
      res.send('Book added...');
    });
  });


  router.get('/api/books', (req, res) => {
    let sql = 'SELECT * FROM books';
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

  router.get('/api/books/:sParam', (req, res) => {
    let sql = `SELECT * FROM books WHERE ${re.params.sParam} = ${req.body.sQuery}`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  router.get('/api/books/:id', (req, res) => {
    let sql = `SELECT * FROM books WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  router.put('/api/books/:id', (req, res) => {
    let book = req.body;
    let sql = `UPDATE books SET ? WHERE id = ${req.params.id}`;
    db.query(sql, book, (err, result) => {
      if (err) throw err;
      res.send('Book updated...', book);
    });
  });

  router.delete('/api/books/:id', (req, res) => {
    let sql = `DELETE FROM books WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send('Book deleted...');
    });
  });

  return router;
}

module.exports = createRouter;