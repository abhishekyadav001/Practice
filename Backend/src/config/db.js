const { Sequelize } = require("sequelize");

// Initialize Sequelize with MySQL2
const sequelize = new Sequelize("abhishekdb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
