const Sequelize = require("sequelize");

//conexão
const sequelize = new Sequelize('projeto_gamerf', 'root', 'root', {
    host:"localhost",
    dialect:"mysql"
})

module.exports = {Sequelize, sequelize}