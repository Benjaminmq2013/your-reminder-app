import React from "react"
import "../styles/AddNoteButton.css"

const AddNoteButton = () =>{
    const addNote = () => {
        console.log("Hola mundo")
    }
    return(
        <button 
        onClick={() => addNote()}
        className={`AddNoteButton button_animation`}>+</button>
    )
}

export default AddNoteButton;