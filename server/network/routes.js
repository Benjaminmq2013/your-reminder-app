const express = require("express")
const note = require("../components/notes/network")

const notes = function (server){
    server.use("/note", note)
}

module.exports = notes;