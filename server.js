const express = require("express")
const router = require("./server/network/routes")
const app = express()
const bodyParser = require("body-parser")
const config = require("./server-config")
const db = require("./db")

// Database
db("mongodb+srv://consumer-users:IocVYrsvneKHMWOS@cluster0.0gaoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

// settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.use(router)
router(app)

// Statics
app.use(express.static("build"))


app.listen((config.api.port), () =>{
    console.log("API listening on http://127.0.0.1:" + config.api.port)
})