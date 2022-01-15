const express = require("express")
const router = express.Router()
const app = express()
const path = require("path")


app.use(router)

app.use(express.static("build"))

// router.get("/", (req, res)=>{
//     res.send(path.resolve(__dirname, "server.js"))
// })

app.listen(3000, () =>{
    console.log("API listening on http://127.0.0.1:3000")
})