module.exports = (restex) => {
  const isAuhtenticated = (req, res, next) => {
    //put your logic to authenticate user
    return next();
  };
  return {
    isAuhtenticated,
  };
};
