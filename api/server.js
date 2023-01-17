import express from "express";
import morgan from "morgan";
import cors from "cors";
import homeRouter from "./src/router/homeRouter.js";
import { connectDb } from "./src/DbConfig/DbConfig.js";

const app = express();
const PORT = 8000;

// middleware

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// DbConfig
connectDb();

//router

app.use("/api/v1/home", homeRouter);

// error handler

app.use("*", (req, res, next) => {
  const error = {
    code: 404,
    message: "Page not found",
  };
  next(error);
});

// all uncaught error

app.use((error, req, res, next) => {
  const statusCode =  500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is running at http://localhost:${PORT}`);
});
