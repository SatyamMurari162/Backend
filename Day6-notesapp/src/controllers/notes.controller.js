const NOtesModel = require("../models/notes.model");

const createNotesController = async(req,res)=>{
    try {
        let {title,description} = req.body;

        let newNote = NOtesModel.create({
            title,
            description
        })

        return res.status(201).json({
            message: "Note create successfully",
            data: newNote,
        })

    } catch (error) {
        console.log("error while create notes",error)
    }
}

module.exports = createNotesController