const express = require("express");
const { postData, downloadUserdata, getdbPostData, getUserPostsdata } = require("../controller/post.controller");
const postRoute = express.Router();

postRoute.route("/:userId").get(getUserPostsdata);
postRoute.route("/dbposts/:userId").get(getdbPostData);
postRoute.route("/bulkAdd").post(postData);
postRoute.route("/:userId/download-excel").get(downloadUserdata);
module.exports = postRoute;
