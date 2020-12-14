//dependencies require path
const path = require("path");

//routing
module.exports = function(app) {
//HTML GET REQUESTS

    //adding to add the stylesheet from css folder
    app.get('styles', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/assets/css/styles.css'));
    });
  
    //paths for all pages
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

//default to index.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
