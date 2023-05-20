import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import { jokesRouter } from "./routes/jokes.routes";
import { connect } from "./config/mongoose.config";

const port = process.env.PORT;

connect();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/jokes", jokesRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));
