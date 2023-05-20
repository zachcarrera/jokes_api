import { Request, Response } from "express";
import { Joke, IJoke } from "../models/jokes.model";

export const findAllJokes = (req: Request, res: Response) => {
    Joke.find()
        .then((allJokes: IJoke[]) => {
            res.json({ jokes: allJokes });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

export const findOneJoke = (req: Request, res: Response) => {
    Joke.findOne({ _id: req.params._id })
        .then((oneJoke: IJoke | null) => {
            res.json({ joke: oneJoke });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

export const randomJoke = (req: Request, res: Response) => {
    Joke.find()
        .then((allJokes: IJoke[]) => {
            res.json(allJokes[Math.floor(Math.random() * allJokes.length)]);
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

export const createJoke = (req: Request, res: Response) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke: IJoke) => {
            res.json({ joke: newlyCreatedJoke });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

export const updateExistingJoke = (req: Request, res: Response) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke: IJoke | null) => {
            res.json({ joke: updatedJoke });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

export const deleteJoke = (req: Request, res: Response) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};
