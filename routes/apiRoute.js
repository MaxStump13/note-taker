const apiRouter = require("express").Router();
const db = require("../db/db.json");
const {v4: uuidv4} = require("uuid");
const {readFromFile, readAndAppend} = require("../helpers/fsUtils")


//add a read to this so it updates the new list
apiRouter.get("/api/notes", (req,res)=> {
    readFromFile("./db/db.json").then((data)=> res.json(JSON.parse(data)));
    // res.sendFile(path.join(__dirname, "./db/db.json"))
    });

apiRouter.get("/api/notes:id", (req,res) => {
    const noteId = req.params.id;
    readFromFile("./db/db.json").then((data) =>JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.id === noteId);
        return result.length >0
            ? res.json(result)
            : res.json("no note with that ID");
    });
});
//can add the fsUtils for a readAndAppend or just create it here
apiRouter.post("/api/notes", (req,res)=>{
    const{title, note} = req.body;
    if(req.body.title && req.body.text){
    const newNote ={
        title,
        text,
        id: uuidv4()
    };
    readAndAppend(newNote, "./db/db.json");
    res.json("Note added successfully");
    }
    else{
        res.error("Error in adding Note");
    }
});

//readfile before we loop over the db. then remove, then write again
// use the if(req.params.id)
// pase data, set to noteList, then loop over notes and conditional if curr note ==notes[i].id
// apiRouter.delete("/api/notes:id", (req,res) =>{

// })


module.exports = apiRouter;


//need to use a read file in get request that aligns after we save
//also need to getandRender for on click active note

//This only works with a class that uses the getNotes
// router.get("/notes", (req, res)=>{
//     db.getNotes().then(notes =>{
//         res.json(notes);
//     })
//     .catch(err => {
//         res.status(500).json(err);
//     })
// })

//this only works with a class that uses getNotes and addNote
// router.post("/notes", (reg,res)=> {
//     console.log(req.body)
//     db.addNote(req.body).then(note => {
//         res.json(note)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// })


//this only works with a class that uses getNotes and removeNote
// router.delete("/notes/:id", (req,res) => {
//     db.removeNote(req.params.id)
//     .then(() => res.json({ok : true}))
//     .catch(err => res.status(500).json(err))
// })

