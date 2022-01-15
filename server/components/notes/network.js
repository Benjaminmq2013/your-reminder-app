const express = require("express")
const router = express.Router()
const response = require("../../network/response")
const controller = require("./controller")

router.get("/", (req, res) =>{
    controller.getNotes()
        .then((notesList) =>{
            response.success(req, res, notesList, 200)
        })

})

module.exports = router;