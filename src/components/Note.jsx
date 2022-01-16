import React from "react"
import "../styles/Note.css"

const Note = () =>{
    return(
        <p className="NoteTextArea-container">
            <span className="NoteTextArea noteColor-red" role="textbox" contentEditable></span>
        </p>

    )
}

export default Note;





