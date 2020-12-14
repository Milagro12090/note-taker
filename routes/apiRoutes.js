//const to require database from public
const notes = require("../db/db.json");
//const to require fs
const fs = require("fs");

//routing
module.exports = function (app) {
//api get request
//get db from .json
    app.get("/api/notes", function(req, res) {
        fs.readFileSync("./db/db.json", "utf8");
        return res.json(notes);
    });

//function to post new notes
    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        const noteID = (notes.length).toString();
        newNote.id = noteID;
        notes.push(newNote);
        return res.json(newNote)
    });

//function for deleting notes using the notes id
    app.delete("/api/notes/:id", function(req, res) {
        const id = req.params.id.toString();
        for (i=0; i < notes.length; i++) {
            if (notes[i].id == id) {
                res.send(notes[i]);
                notes.splice(i, 1);}
        }
    });
};

