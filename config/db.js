// const {createPool} = require('mysql');
// const dbCon =createPool({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB,
//     connectionLimit: 15
// });
// module.exports = dbCon;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('testNode','root','',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;