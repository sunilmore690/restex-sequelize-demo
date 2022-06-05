const Sequelize = require('sequelize');
// let sequelize = new Sequelize('database', 'user', 'password', {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3306,
// });
const sequelize = new Sequelize('sqlite::memory:');
sequelize.sync({ force: true });
module.exports = sequelize;
