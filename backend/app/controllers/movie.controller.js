const db = require("../models");
const Movie = db.movies;

// Create and Save a new Movie
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can't be empty" });
        return;
    }

    // Create a Movie
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    // Save Movie in the database
    movie
        .save(movie)
        .then(data => {
            res.send(movie);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred :("
            });
        });
};

// Retrieve all Movies from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Movie.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred :("
            });
        });
};

// Find a single Movie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Movie.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Movie with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};

// Update a Movie by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update couldn't be found"
        });
    }

    const id = req.params.id;

    Movie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update movie with id=${id}`
                });
            }
            else
                res.send({ message: "Movie was updated successfully." })
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating movie with id=" + id
            });
        });
};

// Delete a Movie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Movie.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete movie with id=${id}`
                });
            } else {
                res.send({
                    message: "Movie was deleted successfuly!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete movie with id=" + id
            })
        })
};

// Delete all Movies from the database
exports.deleteAll = (req, res) => {
    Movie.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Movies were successfuly deleted`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred :("
            });
        });
};

// Find all published Movie reviews
exports.findAllPublished = (req, res) => {
    Movie.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error occurred while retrieving movies"
            });
        });
};


