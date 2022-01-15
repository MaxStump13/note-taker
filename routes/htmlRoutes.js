const path = require("path");
const router = require("express").Router();

// html is set to note.html when set to /notes 
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
// html set to index.html for any other path
router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports = router;