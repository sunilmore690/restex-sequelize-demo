
const Sequelize = require("sequelize");
let sequelize = new Sequelize('database', 'user', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  });
  
  sequelize
    .authenticate()
    .sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });
module.exports = sequelize