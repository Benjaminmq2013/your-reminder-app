const store = require("./store")



function getNotes(){

    return new Promise ((resolve, reject) =>{
        resolve(store.list())
    })
}


module.exports = {
    getNotes,
}