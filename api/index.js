import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());

// we could just use app.get() to call the exact endpoint, but with many same endpoints, the file can become messy. Also, with Router and controller folder, we seperate these complexity out to speific file, it is easlier to manage

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log(`Connected and listen on port number: 8800`);
});
