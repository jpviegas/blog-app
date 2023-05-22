import { Request, Response } from "express";
import { db } from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

type result = {
  id: number;
  username: string;
  email: string;
  password: string;
}[];

export const register = (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  const querySelect = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(querySelect, [email, username], (err, results) => {
    const result = results as result;
    if (err) return res.json(err);
    if (result.length) return res.status(409).json("User already exists!");

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    const queryInsert =
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [username, email, hash];

    db.query(queryInsert, [values], (err, results) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req: Request, res: Response) => {
  const { username, password: bodyPass } = req.body;

  const querySelect = "SELECT * FROM users WHERE username = ?";

  db.query(querySelect, [username], (err, results) => {
    const result = results as result;

    if (err) return res.json(err);
    if (result.length === 0) return res.status(404).json("User not found!");

    if (result.length > 0) {
      const isPasswordCorrect = bcrypt.compareSync(
        bodyPass,
        result[0].password
      );

      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");
    }

    const { JWT_KEY } = process.env;
    const token = jwt.sign({ id: result[0].id }, `${JWT_KEY}`);
    const { password, ...other } = result[0];
    res
      .cookie("acess_token", token, { httpOnly: true })
      .status(200)
      .json(other);
  });
};

export const logout = (req: Request, res: Response) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
