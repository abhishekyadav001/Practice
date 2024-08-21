const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "User ID is required"],
    unique: true,
    // The unique identifier for the user
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    // The name of the user
  },
  username: {
    type: String,
    required: [true, "Username is required"],

    // The unique username of the user
  },
  email: {
    type: String,
    required: [true, "Email is required"],

    // The email address of the user
  },
  address: {
    street: {
      type: String,
      // The street address of the user
    },
    suite: {
      type: String,
      // The suite/apartment number of the user's address
    },
    city: {
      type: String,
      // The city of the user's address
    },
    zipcode: {
      type: String,
      // The ZIP code of the user's address
    },
    geo: {
      lat: {
        type: String,
        // The latitude coordinate of the user's address
      },
      lng: {
        type: String,
        // The longitude coordinate of the user's address
      },
    },
  },
  phone: {
    type: String,
    // The phone number of the user
    // Add phone number validation if necessary
  },
  website: {
    type: String,
    // The website of the user
    // Add website validation if necessary
  },
  company: {
    name: {
      type: String,
      // The name of the company the user belongs to
    },
    catchPhrase: {
      type: String,
      // The catchphrase of the company
    },
    bs: {
      type: String,
      // The business slogan of the company
    },
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
