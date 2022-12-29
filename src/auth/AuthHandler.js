// custom middleware
const authHandler = (req, res, next) => {
  console.log(req.headers);
  next();
};

module.exports = authHandler;
