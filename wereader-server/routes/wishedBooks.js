const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function createRouter(db) {
  const router = express.Router();

  router.post('/api/wishedbooks', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let book = decoded.body.book;
      let sql = 'INSERT INTO wishedbooks SET ?';
      db.query(sql, book, (err, result) => {
        if (err) throw err;
        res.send('Book added...', result);
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  router.get('/api/users/:userId/wishedbooks', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let sql = `SELECT bookId FROM wishedbooks WHERE userId = ?`;
      db.query(sql, [decoded.params.userId],(err, result) => {
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