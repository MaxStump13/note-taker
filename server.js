const express = require("express");
const apiRouter = require("./routes/apiRoute");
const htmlRouter = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api",apiRouter);
app.use("/",htmlRouter);

app.listen(PORT, () =>{
    console.log(`Now listening on PORT: ${PORT}`);
});
