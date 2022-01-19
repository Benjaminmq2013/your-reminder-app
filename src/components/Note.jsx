import React from "react"
import "../styles/Note.css"

const Note = ( {note} ) =>{
    return(
        <p className="NoteTextArea-container">
            <span 
                className="NoteTextArea noteColor-red" 
                role="textbox" 
                contentEditable 
                suppressContentEditableWarning={true}
            >
                <input className="NoteTitle" type="text" defaultValue={note.title} placeholder="Título" contentEditable/> <br />
                {note.description}
            </span>
        </p>

    )
}

export default Note;





