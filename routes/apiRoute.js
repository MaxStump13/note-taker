const apiRouter = require("express").Router();
const db = require("../db/db.json");
const {v4: uuidv4} = require("uuid");
const {readFromFile, readAndAppend, writeToFile} = require("../helpers/fsUtils")


//add a read to this so it updates the new list
apiRouter.get("/notes", (req,res)=> {
    readFromFile("./db/db.json").then((data)=> res.json(JSON.parse(data)));
    });

apiRouter.get("/notes:id", (req,res) => {
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
apiRouter.post("/notes", (req,res)=>{
    const {title, text} = req.body;
    if(req.body){
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
