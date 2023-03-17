const Joke = require("../models/jokes.model");
const mongoose = require("mongoose");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then((oneJoke) => {
            res.json({ joke: oneJoke });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json(allJokes[Math.floor(Math.random() * allJokes.length)]);
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => {
            res.json({ joke: newlyCreatedJoke });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};
