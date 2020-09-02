const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = mongoose.model("User");
const Post = mongoose.model("Post");

router.get("/allPost", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/post/:id", (req, res) => {
  Post.findById(req.params.id)

    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.put("/update", (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      title: req.body.title,
    },
    {
      new: true,
    }
  ).then((err, result) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(result);
    }
  });
});
router.post("/create", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.json({ error: "Plase add all the fields" });
  }

  const post = new Post({
    title,
  });
  post
    .save()
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/deletePost/:postId", (req, res) => {
  Post.findOneAndDelete({ _id: req.params.postId }, function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json({ message: "post is deleted" });
    }
  });
});

module.exports = router;
