const fs = require("fs");
const Post = require("../model/posts.model");
const ExcelJS = require("exceljs");
const userModel = require("../model/users.model");
const { default: axios } = require("axios");
const { default: fileDownload } = require("js-file-download");

const getUserPostsdata = async (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    res.status(400).json({ message: "please send a userId as a params" });
  }
  try {
    const isUserExist = await userModel.find({ id: userId });
    // Checking if Post with given userId or not
    if (isUserExist.length > 0) {
      const { name, company } = isUserExist[0];
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      res.json({ success: true, message: "Posts fetched  successfully", posts: data, name, company });
    } else {
      res.json({ success: false, message: "User does not exist in the database" });
    }
  } catch (error) {
    console.error("Error fetching and storing posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch and store posts", error });
  }
};

const getdbPostData = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  if (!userId) {
    res.status(401).json({ message: "please send a userId as a params" });
  }

  try {
    const posts = await Post.find({ userId });
    if (!posts) {
      res.json({ success: true, message: "Posts fetched  successfully", posts });
    } else {
      res.json({ success: false, message: "Post of this user does not exist in the database" });
    }
  } catch (error) {
    console.error("Error fetching and storing posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch and store posts", error });
  }
  res.send({ message: "getdbposts" });
};

const postData = async (req, res) => {
  const { posts } = req.body;

  try {
    const { userId } = posts[0];
    const isUserExist = await Post.find({ userId });
    //   userId = Number(userId);
    if (isUserExist.length < 1) {
      await Post.insertMany(posts);
      res.status(201).json({ success: true, message: "Posts saved successfully", usersPostexist: true });
    } else {
      res.status(401).json({
        success: false,
        message: "This user of posts already does exist in the database",
        usersPostexist: true,
      });
    }
  } catch (error) {
    console.error("Error fetching and storing posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch and store posts", error });
  }
};

const downloadUserdata = async (req, res) => {
  const userId = req.params;
  try {
    // Fetch all posts from the database
    const posts = await Post.find(userId);
    if (!posts) {
      res.json({ message: "Post of this user is not found in database " });
    }
    // Create a new Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Posts");

    // Define worksheet columns
    worksheet.columns = [
      { header: "User ID", key: "userId", width: 15 },
      { header: "Post ID", key: "id", width: 15 },
      { header: "Title", key: "title", width: 50 },
      { header: "Body", key: "body", width: 100 },
    ];

    // Add posts data to the worksheet
    posts.forEach((post) => {
      worksheet.addRow(post);
    });

    // Set response headers for file download
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=posts.xlsx");

    return workbook.xlsx.write(res).then(() => {
      fileDownload(res, "posts.xlsx");
      res.status(200);
    });
  } catch (error) {
    console.error("Error downloading Excel file:", error);
    res.status(500).json({ success: false, message: "Failed to download Excel file", error });
  }
};

module.exports = { postData, getUserPostsdata, downloadUserdata, getdbPostData };
