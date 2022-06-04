module.exports = function(sequelize,Sequelize){
    const User = sequelize.define("users", {
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        }      
      },{
        freezeTableName: true,
        tableName: "users"
    });
    return User;
}