const fs = require("fs");
const express = require("express");
const routes = require("./routes");
const uuid = require("./helpers/uuid");
const { title } = require("process");

const app = express();
const PORT =process.PORT.env || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api",apiRoutes);
app.use("/",htmlRoutes);

app.listen(PORT, () =>{
    console.log(`Now listening on PORT: ${PORT}`);
});


// app.get("/", (req,res) =>
//     res.sendFile(path.json(_dirname,"/public/index.htlm"))
// );

// app.get("/api/notes", (req,res)=>{
//     res.json(`${req.method} request received to get notes`);
//     console.info(`${req.method} request received to get notes`);
// });

// app.post("/api/notes", (req,res) => {
//     console.info(`${req.method} request reveived to add note`);
// });