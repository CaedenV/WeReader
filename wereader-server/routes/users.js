const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

function createRouter(db) {
  const router = express.Router();

  router.post('/api/users/register', (req, res) => {
    // Check for a valid token in the request headers
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const { userName, password } = req.body;
      const hashedPassword = hashPassword(password);
      const sql = `INSERT INTO users (userName, password,) VALUES (?, ?)`;
      db.query(sql, [userName, hashedPassword, nowRead], (err, result) => {
        if (err) {
          res.status(500).send({ error: 'Internal server error' });
          return;
        }
        res.send({ message: 'User registered successfully' });
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }

  });

  router.post('/login', (req, res) => {
    const { userName, password } = req.body;

    // Check if the user exists in the database
    const sql = `SELECT * FROM users WHERE userName = ?`;
    db.query(sql, [userName], (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Internal server error' });
        return;
      }
      if (result.length === 0) {
        res.status(401).send({ error: 'Incorrect username or password' });
        return;
      }
      // Compare the password with the stored hash
      const user = result[0];
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        res.status(401).send({ error: 'Incorrect username or password' });
        return;
      }
      const payload = { // Generates a JWT token
        id: user.id,
        userName: user.userName,
      };
      const token = jwt.sign(payload, secret, { expiresIn: '1h' });
      res.send({ token });// Sends the token to the client
    });
  });

  router.put('/api/users/:id', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let sql = `UPDATE users SET ? WHERE id = ?`;
      db.query(sql, [decoded.id], (err, result) => {
        if (err) throw err;
        res.send('User Profile updated...');
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  router.delete('/api/users/:id', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      let sql = `DELETE FROM users WHERE id = ?`;
      db.query(sql, [decoded.id], (err, result) => {
        if (err) throw err;
        res.send('User Profile deleted...');
      });
    } catch (err) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
    }
  });

  return router;
}

module.exports = createRouter;