const express = require("express");

const {
    findAllJokes,
    findOneJoke,
    randomJoke,
    createJoke,
    updateExistingJoke,
    deleteJoke,
} = require("../controllers/jokes.controller");

const router = express.Router();

router.get("/", findAllJokes);
router.get("/random", randomJoke);
router.post("/new", createJoke);
router.get("/:_id", findOneJoke);
router.put("/update/:_id", updateExistingJoke);
router.delete("/delete/:_id", deleteJoke);

module.exports = {
    jokesRouter: router,
};
