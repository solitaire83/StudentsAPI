function errh(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('ceva n-a mers bn, nu mai incerca');
  }
  
  module.exports = errh;