const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
    return res.json({ message: "testing 123" });
});

const allJokeRoutes = require("./routes/jokes.routes");
allJokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
