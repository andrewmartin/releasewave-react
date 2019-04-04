const express = require('express');
const router = express.Router();

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

module.exports = router;
