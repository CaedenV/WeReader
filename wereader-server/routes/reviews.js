const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function createRouter(db) {
  const router = express.Router();

  router.post('/api/reviews', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let rev = decoded.body;
      let sql = 'INSERT INTO reviews SET ?';
      db.query(sql, rev, (err, result) => {
        if (err) throw err;
        res.send('Review added...');
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  router.get('/api/reviews/:bookId', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let sql = `SELECT * FROM reviews WHERE id = ?`;
      db.query(sql, [decoded.params.bookId], (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  return router;
}

module.exports = createRouter;