const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
          id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
          displayName: {
            // allowNull: false,
            type: DataTypes.STRING,
          },
          email: {
            // allowNull: false,
            type: DataTypes.STRING,
            // unique: true
          },
          password: {
            // allowNull: false,
            type: DataTypes.STRING
          },
          image: {
            // allowNull: false,
            type: DataTypes.STRING,
          }
    },
    {
      timestamps: false,
      underscored: true,
    });
  
    return User;
  };
  
  module.exports = UserModel;
