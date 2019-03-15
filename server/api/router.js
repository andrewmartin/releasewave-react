const express = require('express');
const router = express.Router();
const contentful = require('./contentful');

const handleData = (data, req, res) => {
  return res.json(data);
};

const handleError = (error, req, res, next) => {
  if (error.response) {
    return res.status(error.response.status).json({
      ...error.response.data,
      statusText: error.response.statusText,
    });
  }

  if (error) {
    return res.status(400).json({
      message: error.message,
      ...error,
    });
  }

  return next();
};

router.get('/entries/:id', (req, res, next) => {
  return contentful
    .getEntries(req.params.id, req.query)
    .then(data => handleData(data, req, res, next))
    .catch(error => handleError(error, req, res, next));
});

router.get('/entry/:id', (req, res, next) => {
  return contentful.client
    .getEntry(req.params.id)
    .then(data => handleData(data, req, res, next))
    .catch(error => handleError(error, req, res, next));
});

module.exports = router;
