import React from "react"
import "../styles/AddNoteButton.css"

const AddNoteButton = () =>{
    let btnAnim = ``
    function addAnim(){
        btnAnim = `addNote-btn-anim`
        console.log(btnAnim)
    }
    return(
        <button 
        onClick={addAnim}
        className={`AddNoteButton button_animation ${ btnAnim }`}>+</button>
    )
}

export default AddNoteButton;