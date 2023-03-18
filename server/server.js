require("dotenv").config();

const express = require("express");

const { jokesRouter } = require("./routes/jokes.routes");

const port = process.env.PORT;
require("./config/mongoose.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/jokes", jokesRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));
