const fs = require("fs");
const express = require("express");
// const path = require("path");
const apiRouter = require("./routes/apiRoute");
const htmlRouter = require("./routes/htmlRoutes");
// const api = require("./public/assets/js/index");
// const uuid = require("./helpers/uuid");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api",apiRouter);
app.use("/",htmlRouter);
// app.use("/")

// app.get("/", (req, res) =>
// 	res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// app.get("/api/notes", (req, res) =>
// 	res.sendFile(path.join(__dirname, "/public/notes.html"))
// );


app.listen(PORT, () =>{
    console.log(`Now listening on PORT: ${PORT}`);
});
