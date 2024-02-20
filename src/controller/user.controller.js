const { default: axios } = require("axios");
const userModel = require("../model/users.model");
// for getting all user information from rest API

const getAllUsers = async (req, res) => {
  try {
    const api = process.env.REST_API + "/users";
    const { data } = await axios.get(api);
    const usersData = await userModel.find();
    const matchedUsers = [];
    const unmatchedUsers = [];
    for (const apiUser of data) {
      //  Just comparing existingUser id with apiUserID
      const isMatchingUser = usersData.some((existingUser) => existingUser.id === apiUser.id);

      if (isMatchingUser) {
        // Pushing to matched data users if it Matched
        matchedUsers.push(apiUser);
      } else {
        // Else Pushing to unmatchedUser
        unmatchedUsers.push(apiUser);
      }
    }
    res.status(201).json({ message: "All users data ", matchedUsers, unmatchedUsers });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users from the API", error });
  }
};

// for posting user data in our database from rest API
const addUsers = async (req, res) => {
  try {
    const { data } = req.body;

    // Checking if data exists
    if (!data) {
      return res.status(404).json({ message: "Please provide user data" });
    }

    // Checking if the user with the same ID already exists
    const isUserExist = await userModel.findOne({ id: data.id });

    // If user already exists, returning a conflict response
    if (isUserExist) {
      return res.status(409).json({ message: "This user already exists in our database" });
    }

    const newUser = await userModel.create(data);

    // Send success response
    return res.status(201).json({ message: "User is saved in our database" });
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(500).json({ message: "Failed to add user to the database", errorMessage: error.message });
  }
};

// Download posts of a specific user in Excel format

module.exports = { getAllUsers, addUsers };
