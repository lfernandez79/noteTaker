const fs = require("fs")
const saveNotes = require("../db/db.json")

module.exports = function (app) {

    // GET call
    app.get("/api/notes", function (req, res) {
        res.json(saveNotes);
        console.log(saveNotes)
    });

    // POST call
    app.post("/api/notes", function (req, res) {
        var newNote = (req.body);
        console.log(newNote);

        savedNotes.push(newNote);
        req.body.index = saveNotes.length;
        res.json(newNote);

        fs.writeFile(savedNotes, newNote, "utf8", function (err) {
            if (err) throw err;
        });
    });

    // DELETE call
    app.delete("/api/notes/:id", function (req, res) {
        const index = saveNotes.indexOf(saveNotes);
        saveNotes.splice(index, (1));
        res.json(savedNotes);
    });
};