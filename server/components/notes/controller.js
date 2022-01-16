const store = require("./store")



function getNotes(){

    return new Promise ((resolve, reject) =>{
        resolve(store.list())
    })
}

function addNote(title, description){
    return new Promise((resolve, reject) =>{
        console.log(title, description)
        if(!title || !description){
            console.error("NoteController: No hay 'title' o 'description'" )
            reject("Los datos son incorrectos")
            return false;
        }
        const fullNote = {
            title: title,
            description: description
        }
        store.add(fullNote)
        resolve(fullNote)
    })
}

module.exports = {
    getNotes,
    addNote,
}