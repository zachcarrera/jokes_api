import mongoose from "mongoose";

const dbName = process.env.DB;
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.7fscy2n.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const connect = () => {
    mongoose
        .connect(uri)
        .then(() =>
            console.log(`Established a connection to the database ${dbName}`)
        )
        .catch((err) =>
            console.log(
                "Something went wrong when connecting to the database",
                err
            )
        );
};
