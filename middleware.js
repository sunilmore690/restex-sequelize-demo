module.exports = (restex) => {
  const isAuhtenticated = (req, res, next) => {
    //put your logic to authenticate user
    return res.status(401).json({message:'unauthorized'})
    return next();
  };
  return {
    isAuhtenticated,
  };
};
