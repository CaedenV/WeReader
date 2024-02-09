const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/api/books', (req, res, next) => {
    // Your POST route logic here
  });

  router.get('/api/books', function (req, res, next) {
    // Your GET route logic here
  });
  router.get('/api/books/:id', function (req, res, next) {
    // Your DELETE route logic here
  });

  router.put('/api/books/:id', function (req, res, next) {
    // Your PUT route logic here
  });

  router.get('/api/books/:id', function (req, res, next) {
    // Your DELETE route logic here
  });

  return router;
}

module.exports = createRouter;