const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Couldn't connect to database", err);
    process.exit();
})





// ###### ROUTES ######
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to moviebuffers!" });
});

require("./app/routes/movie.routes")(app);

// ####### END #######
// set port, listen for requests
const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});