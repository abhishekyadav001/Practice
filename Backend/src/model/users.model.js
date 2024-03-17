const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.JSON,
      allowNull: false,
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      suite: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      geo: {
        type: DataTypes.JSON,
        allowNull: false,
        lte: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lng: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
    },
    phone: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.JSON,
      allowNull: false,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      catchPhrase: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "User",
  }
);

module.exports = User;
