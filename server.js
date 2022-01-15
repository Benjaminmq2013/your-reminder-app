const express = require("express")
const router = require("./server/network/routes")
const app = express()
const config = require("./server-config")


// app.use(router)
router(app)

// Statics
app.use(express.static("build"))


app.listen((config.api.port), () =>{
    console.log("API listening on http://127.0.0.1:" + config.api.port)
})