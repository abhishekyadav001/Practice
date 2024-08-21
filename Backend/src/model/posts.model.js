const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const syncDB = require("../config/syncDB");

const Post = sequelize.define(
  "Post",
  {
    userId: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    tableName: "Post",
  }
);

syncDB();
module.exports = Post;
