import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/post.js";

const router = express.Router();

// the (req, res) will be placed into the controller folder, so it is more organzied
// router.use("/test", (req, res) => {
//   res.json("from posts.js");
// });

// router.use("/test", addPost);

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/", deletePost);
router.put("/", updatePost);

export default router;
