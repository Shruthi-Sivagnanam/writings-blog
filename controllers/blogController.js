const Blog = require("../models/blogmodel");

const add_blog = (req, res) => {
  const blog = new Blog({
    user_id: req.body.user_id,
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const all_blog = (req, res) => {
  Blog.find()
    .sort({ updatedAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const single_blog = (req, res) => {
  const id = req.query.id;
  Blog.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send("Error");
    });
};

const delete_blog = (req, res) => {
  const id = req.body.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const edit_blog = (req, res) => {
  const id = req.body.id;
  Blog.findByIdAndUpdate(id, {
    title: req.body.title,
    category: req.body.category,
    content: req.body.content,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { add_blog, all_blog, single_blog, delete_blog, edit_blog };
