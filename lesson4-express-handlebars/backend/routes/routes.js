const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");

router.get("/", PostController.getAllPosts);
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/add-post", (req, res) => {
  res.render("add-post");
});
router.post("/add-post", PostController.addPost);

module.exports = router;
