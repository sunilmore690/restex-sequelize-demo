module.exports = function (map) {
  //   map.get('/users', 'user#getUsers');
  map.post('/authenticate', 'user#authenticateUser');
};
