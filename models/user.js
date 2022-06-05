module.exports = function (sequelize, Sequelize) {
  let User = sequelize.define(
    'users',
    {
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      tableName: 'users',
    }
  );
  User.statics = {
    collectionName: 'users',
    routeOption: {
      middleware: ['isAuhtenticated'], //where auth is function which export in middleware.js
    },
  };
  return User;
};
