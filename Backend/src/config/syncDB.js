const sequelize = require("./db");

const syncDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};
module.exports = syncDB;
