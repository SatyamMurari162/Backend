import express from "express";
import jwt from "jsonwebtoken";
import connectDB from "./config/db.js";

const app = express();

connectDB()

app.use(express.json())

app.get("/get", (req, res) => {
  res.status(200).json({
    message: "Welcome to authentaication api",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { email, name, password } = req.body;

  // Save data to db

  const token = jwt.sign(
    {
      name,
      email,
    },
    "b0608d8b771114c2b2b411b1ee59771de9188845df075f1b42b6950b40054bd62f17f80e48a5267e0759e8696a242205",
  );

  res.status(201).json({
    message: "User created Successfully",
    data: {
      user: {
        email,
        name,
      },
      token,
    },
  });




});

export default app;
