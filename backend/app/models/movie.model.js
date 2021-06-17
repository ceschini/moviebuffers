module.exports = mongoose => {
    const Movie = mongoose.model(
        "movie",
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );
    return Movie;
}