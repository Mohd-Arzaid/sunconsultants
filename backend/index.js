import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

// Testing the server
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is up and running ...",
  });
});

//Api's

// Listening to the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
