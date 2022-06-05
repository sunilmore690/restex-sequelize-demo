module.exports = function (restex) {
  const User = restex.model('users');
  const authenticateUser = async (req, res, next) => {
    const user = req.body;
    let user = await User.findOne({
      email: user.email,
      password: user.password,
    });
    if (!user) {
      return res.status(402).json({ message: 'Email or password wrong' });
    }
    res.json(user);
  };
  return {
    authenticateUser,
  };
};
