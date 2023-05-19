import dotenv from "dotenv"
import express, {Express, Request, Response} from "express"
import { jokesRouter } from "./routes/jokes.routes";

// require("dotenv").config();
dotenv.config();
// const express = require("express");
// const { jokesRouter } = require("./routes/jokes.routes");


const port = process.env.PORT;
require("./config/mongoose.config");

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const testData = {message: "hello"}

app.get("/", (req, res) => {
    return res.json(testData);
})

console.log(app)

app.use("/api/jokes", jokesRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));
