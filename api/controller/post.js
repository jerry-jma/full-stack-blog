import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {};

export const deletePost = (req, res) => {
  // need to check if there is a json web token (no token, meaning we are not logged in or authicate, so not allow to delete)
  // and check if the post actually belongs to us

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid!");
    const postId = req.params.id;
    const userId = userInfo.id;

    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userId], (err, data) => {
      if (err) {
        return res.status(403).json("You can only delete your own posts");
      }

      return res.json("Post has been deleted!");
    });
  });
};
export const updatePost = (req, res) => {};
