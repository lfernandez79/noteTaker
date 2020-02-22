// Create server and port
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set to JSON all incoming
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)


// Server starts listening 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
