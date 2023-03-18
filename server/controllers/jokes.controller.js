const { Joke } = require("../models/jokes.model");

const findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then((oneJoke) => {
            res.json({ joke: oneJoke });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const randomJoke = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json(allJokes[Math.floor(Math.random() * allJokes.length)]);
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => {
            res.json({ joke: newlyCreatedJoke });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

module.exports = {
    findAllJokes,
    findOneJoke,
    randomJoke,
    createJoke,
    updateExistingJoke,
    deleteJoke,
};
