const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    
    description: {
        type: String,
        required: true,
        minlength: [20, "Minimum 20 characters are required"]
    }
})

const NOtesModel = mongoose.model("notes", notesSchema);
module.exports = NOtesModel;