import mongoose, { Document, Schema } from "mongoose";

export interface IJoke extends Document {
    setup: string;
    punchline: string;
}

const JokeSchema = new Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup is required"],
            minLength: [10, "Setup must be atleast 10 characters long"],
        },
        punchline: {
            type: String,
            required: [true, "Punchline is required"],
            minLength: [3, "Punchline must be atleast 3 characters long"],
        },
    },
    { timestamps: true }
);

export const Joke = mongoose.model<IJoke>("Joke", JokeSchema);
