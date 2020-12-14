//dependencies for express, path, and fs
const express = require("express");
const path = require("path");
const fs = require("fs");

//const for setting up express and port
const app = express();
const PORT = process.env.PORT || 2376;

//app.use for handling data parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//path.join for using files within .public
app.use(express.static(path.join(__dirname, './public')));

//require routes for api and html 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//starts server listening 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
