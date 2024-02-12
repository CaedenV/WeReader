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
            let friends = req.body;
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
            const userId = decoded.id;

            let sql = `SELECT u.userName FROM friendusers f
                  JOIN users u ON f.userId = u.id
                  WHERE f.friendId = ${req.params.userId} AND (f.userId = ${userId} OR u.id = ${userId})`;
            db.query(sql, (err, result) => {
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
            let sql = `DELETE FROM friendusers WHERE userId = ${decoded.userId}
            AND friendId = ${decoded.friendId}`;
            db.query(sql, (err, result) => {
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