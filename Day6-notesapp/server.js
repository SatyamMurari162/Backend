const express = require("express");
const connectDB = require("./src/config/db");
const createNotesController = require("./src/controllers/notes.controller")

const app = express();

connectDB()
app.use(express.json())

app.post("/create",createNotesController);

app.get("/",(req,res)=>{
    res.send("app")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})