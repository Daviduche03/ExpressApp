import exppres from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorMiddleware";
import dotenv from "dotenv";
import connectDB from './config/db'
const port = 8080;
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by"); // less hackers know about our stacked-fraction


app.get("/", (req, res) => {
  res.status(200).json("Server running");
});


app.use(errorHandler)
connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});