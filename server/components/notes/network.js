const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.send({
        error: "",
        body: "Aqui te van tus notas"
    })
})

module.exports = router;