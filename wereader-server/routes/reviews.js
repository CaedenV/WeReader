const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/api/reviews', (req, res) => {
    let rev = req.body;
    let sql = 'INSERT INTO reviews SET ?';
    db.query(sql, rev, (err, result) => {
      if (err) throw err;
      res.send('Review added...');
    });
  });

  router.get('/api/reviews/:bookId', (req, res) => {
    let sql = `SELECT * FROM reviews WHERE id = ${req.params.bookId}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  return router;
}

module.exports = createRouter;