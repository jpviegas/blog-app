import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";
import userRouter from "./routes/users";
import postsRouter from "./routes/posts";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);

app.listen(3001, () => {
  console.log("connected");
});
