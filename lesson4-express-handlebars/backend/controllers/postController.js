const Post = require("../models/postModel");

function getAllPosts(req, res) {
  Post.find()
    .then((result) => {
      res.render("index", { posts: result });
    })
    .catch((err) => {
      console.log("Error retrieving posts:", err);
      res.render("index", { posts: [] });
    });
}

function addPost(req, res) {
  const post = new Post({
    author: req.body.author,
    content: req.body.content,
  });
  post.save()
    .then((result) => {
      console.log("Post saved:", result);
      res.redirect("/"); // Redirect to the home page
    })
    .catch((err) => {
      console.log("Error saving post:", err);
      res.status(500).send("Error saving post");
    });
}

module.exports = {
  getAllPosts,
  addPost
};
