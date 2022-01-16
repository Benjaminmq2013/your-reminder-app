const Model = require("./model")

function addNote(note){
    const myNote = new Model(note);
    myNote.save();
}

function getNotes(){
    let notes = "Aqui estan tus notas provenientes de la base de datos"
    return(notes)
}



module.exports = {
    list: getNotes,
    add: addNote
}