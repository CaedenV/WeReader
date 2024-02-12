const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/api/wishedbooks', (req, res) => {
    let book = req.body;
    let sql = 'INSERT INTO wishedbooks SET ?';
    db.query(sql, book, (err, result) => {
      if (err) throw err;
      res.send('Book added...', result);
    });
  });

  router.get('/api/wishedbooks/:userId', (req, res) => {
    let sql = `SELECT bookId FROM wishedbooks WHERE userId = ${req.params.userId}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  return router;
}

module.exports = createRouter;