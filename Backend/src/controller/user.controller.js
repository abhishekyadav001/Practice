const { default: axios } = require("axios");
const User = require("../model/users.model");
const { axiosInstance } = require("../utils/axiosInstance");

// for getting all user information from rest API

const getAllUsers = async (req, res) => {
  try {
    // const { data } = await axiosInstance.get("/users");
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/");

    const users = data;
    res.json({ message: "got all users from rest api", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users from the API", error });
  }
};

const getAllDatabseUsers = async (req, res) => {
  try {
    const usersData = await User.findAll();
    res.status(201).json({ message: "All users data ", usersData });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users from the API", error: error.message });
  }
};

// for posting user data in our database from rest API
const addUsers = async (req, res) => {
  try {
    const userData = req.body;
    // Checking if the user already exists in the database

    console.log(userData);
    const existingUser = await User.findOne({ where: { id: userData.id } });
    console.log(existingUser, 1);
    if (existingUser) {
      // User already exists, sending response indicating that
      console.log("userexist,2");
      res.status(201).json({ message: "User already exists in the database", userExist: true });
    } else {
      // User doesn't exist, saved the user data to the database
      await User.create(userData);
      console.log(User.toJson, 4);
      res.status(201).json({ message: "User added to the database", userData, userExist: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to add user to the database", error });
  }
};

// Download posts of a specific user in Excel format

module.exports = { getAllUsers, addUsers, getAllDatabseUsers };
