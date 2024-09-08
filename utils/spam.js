const limit = require('express-rate-limit');

const ratelimiter = limit({
  windowMs: 5 * 60 * 1000,
  max: 120, 
});

module.exports = ratelimiter;