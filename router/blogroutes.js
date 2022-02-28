const express = require("express");
const {
  add_blog,
  all_blog,
  single_blog,
  edit_blog,
  delete_blog,
} = require("../controllers/blogController");

const route_blog = express.Router();

route_blog.route("/createblog").post(add_blog);
route_blog.route("/allblogs").get(all_blog);
route_blog.route("/singleblog").get(single_blog);
route_blog.route("/editblog").post(edit_blog);
route_blog.route("/deleteblog").post(delete_blog);

module.exports = route_blog;
