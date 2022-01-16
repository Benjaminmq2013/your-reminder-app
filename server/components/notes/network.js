const express = require("express")
const router = express.Router()
const response = require("../../network/response")
const controller = require("./controller")

router.get("/", (req, res) =>{
    controller.getNotes()
        .then((notesList) =>{
            response.success(req, res, notesList, 200)
        })
        .catch(e =>{
            response.error(req, res, "Unexpected Error", 500, e)
        })
})

router.post("/", (req, res)=>{    
    controller.addNote(req.body.title, req.body.description)
        .then((fullNote)=>{
            response.success(req, res, fullNote, 201)
        })
        .catch((e)=>{
            response.error(req, res, "Informacion invalida", 500, e)
        })
})

module.exports = router;