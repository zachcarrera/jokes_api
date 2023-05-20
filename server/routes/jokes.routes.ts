import express from "express";

import {
    findAllJokes,
    findOneJoke,
    randomJoke,
    createJoke,
    updateExistingJoke,
    deleteJoke,
} from "../controllers/jokes.controller";

export const jokesRouter = express.Router();

jokesRouter.get("/", findAllJokes);
jokesRouter.get("/random", randomJoke);
jokesRouter.post("/new", createJoke);
jokesRouter.get("/:_id", findOneJoke);
jokesRouter.put("/update/:_id", updateExistingJoke);
jokesRouter.delete("/delete/:_id", deleteJoke);
