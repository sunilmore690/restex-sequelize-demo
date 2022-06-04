
const Sequelize = require("sequelize");
let sequelize = new Sequelize('database', 'user', 'password', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
  });
  
  sequelize
          .authenticate()
          .then(() => {
              console.log('Connection has been established successfully.');
          })
          .catch((err) => {
              console.log('Unable to connect to the database:', err);
          });
          sequelize.sync()
module.exports = sequelize