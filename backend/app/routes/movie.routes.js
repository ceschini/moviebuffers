module.exports = app => {
    const movies = require("../controllers/movie.controller.js");

    var router = require("express").Router();

    // Create a new Movie
    router.post("/", movies.create);

    // Retrieve all Movies
    router.get("/", movies.findAll);

    // Retrieve all published Movie reviews
    router.get("/published", movies.findAllPublished);

    // Retrieve a single Movie with id
    router.get("/:id", movies.findOne);

    // Update a Movie with id
    router.put("/:id", movies.update);

    // Delete a Movie with id
    router.delete("/:id", movies.delete);

    // Remove all Movies
    router.delete("/", movies.deleteAll);

    app.use('/api/movies', router);
}