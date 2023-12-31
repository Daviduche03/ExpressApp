import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorMiddleware.js";
import dotenv from "dotenv";
import connectDB from './config/db.js'
const port = 8080;
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by"); 


app.get("/", (req, res) => {
  res.status(200).json("Server running");
});


app.use(errorHandler)
connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});