const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/random", JokesController.randomJoke);
    app.post("/api/jokes/new", JokesController.createJoke);
    app.get("/api/jokes/:_id", JokesController.findOneJoke);
    app.put("/api/jokes/update/:_id", JokesController.updateExistingJoke);
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);
};
