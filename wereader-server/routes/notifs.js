const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function createRouter(db) {
    const router = express.Router();

    router.post('/api/notifs', (req, res) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized: No token provided.' });
        }
        try {
            const decoded = jwt.verify(token, secret);
            let sql = 'INSERT INTO notifs SET ?';
            db.query(sql, [decoded.body.notif], (err, result) => {
                if (err) throw err;
                res.send('Notif posted...', result);
            });
        } catch (err) {
            return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
        }
    });

    router.get('/api/notifs/:userId', (req, res) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized: No token provided.' });
        }
        try {
            const decoded = jwt.verify(token, secret);
            let sql = `SELECT senderId, bookId FROM notifs WHERE receiverId = ?`;
            db.query(sql, [decoded.params.userId], (err, result) => {
                if (err) throw err;
                res.send(result);
            });
        } catch (err) {
            return res.status(401).send({ error: 'Unauthorized: Invalid token.' });
        }
    });

    router.delete('/api/notifs/:userId', (req, res) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized: No token provided.' });
        }
        try {
            const decoded = jwt.verify(token, secret);
            let sql = `DELETE FROM notifs WHERE receiverId = ? AND bookId = ?`;
            db.query(sql, [decoded.params.userId, decoded.body.bookId], (err, result) => {
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