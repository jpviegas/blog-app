import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/auth";
import userRouter from "./routes/users";
import postsRouter from "./routes/posts";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);

app.listen(3001, () => {
  console.log("connected");
});
