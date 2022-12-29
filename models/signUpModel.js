const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const signUpUser = sequelize.define('Registration',{
    id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
      username:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
       type: DataTypes.STRING,
       allowNull: false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      }
},{
    modelName: 'Registrations'
})
module.exports = signUpUser;