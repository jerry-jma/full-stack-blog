import express from "express";
import { addPost } from "../controller/post.js";

const router = express.Router();

// the (req, res) will be placed into the controller folder, so it is more organzied
// router.use("/test", (req, res) => {
//   res.json("from posts.js");
// });

router.use("/test", addPost);

export default router;
