const express = require('express');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

function createRouter(db) {
    const router = express.Router();

    router.post('/api/friendusers', (req, res) => {
        // Check for a valid token in the request headers
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized: No token provided.' });
        }
        try {
            const decoded = jwt.verify(token, secretKey);
            let friends = decoded.body.friends;
            let sql = 'INSERT INTO friendusers SET ?';
            db.query(sql, friends, (err, result) => {
                if (err) throw err;
                res.send('Friend added...', result);
            });
        } catch (err) {
            return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
        }

    });

    router.get('/api/friendusers/:userId', (req, res) => {
        // Check for a valid token in the request headers
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized: No token provided.' });
        }
        try {
            // Verify the token and decode the payload
            const decoded = jwt.verify(token, secretKey);
            const userId = decoded.params.userId;
            let sql = `SELECT u.userName FROM friendusers f
                  JOIN users u ON f.friendId = u.id
                  WHERE f.userId = ?`;
            db.query(sql, userId, (err, result) => {
                if (err) throw err;
                res.send(result);
            });

        } catch (err) {
            return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
        }
    });

    router.delete('/api/friendusers', (req, res) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized: No token provided.' });
        }
        try {
            const decoded = jwt.verify(token, secret);
            let sql = `DELETE FROM friendusers WHERE userId = ? AND friendId = ?`;
            db.query(sql, [decoded.body.userId, decoded.body.friendId], (err, result) => {
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