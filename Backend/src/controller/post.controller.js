const xlsx = require("xlsx");
const fs = require("fs");
const Post = require("../model/posts.model");
const axiosInstance = require("../utils/axiosInstance");
const { where } = require("sequelize");

const getPostdata = async (req, res) => {
  const { userId } = req.params;
  try {
    const isUserExist = await Post.findOne({ where: { id: userId } });
    if (isUserExist != null || isUserExist.length > 0) {
      const { data } = await axiosInstance.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      res.json({ success: true, message: "Posts fetched  successfully", posts: data });
    } else {
      res.json({ success: false, message: "User does not exist in the database" });
    }
  } catch (error) {
    console.error("Error fetching and storing posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch and store posts", error });
  }
};

const postData = async (req, res) => {
  const { userId } = req.params;
  try {
    const isUserExist = await Post.findOne({ where: { id: userId } });
    console.log(isUserExist, 1);
    if (isUserExist !== null || isUserExist.length > 0) {
      const postsResponse = await axiosInstance.get(`posts?userId=${userId}`);
      const posts = postsResponse.data;
      console.log(posts, 2);
      await Post.bulkCreate(posts);
      console.log(posts, 3);
      res.json({ success: true, message: "Posts fetched and saved successfully" });
    } else {
      console.log(4);
      res.json({ success: false, message: "User does not exist in the database" });
    }
  } catch (error) {
    console.error("Error fetching and storing posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch and store posts", error });
  }
};

const downloadUserdata = async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await axiosInstance.get(`posts?userId=${userId}`);
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this user" });
    }

    const ws = xlsx.utils.json_to_sheet(posts);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Posts");
    const excelFilePath = `user_${userId}_posts.xlsx`;
    xlsx.writeFile(wb, excelFilePath);

    res.download(excelFilePath, (err) => {
      if (err) {
        throw err;
      } else {
        fs.unlinkSync(excelFilePath); // Delete the file after download
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to download posts in Excel format", error });
  }
};

module.exports = { postData, getPostdata, downloadUserdata };
