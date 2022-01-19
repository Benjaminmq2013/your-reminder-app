import React from "react"
import Note from "../components/Note"
import "../styles/NotesWrapper.css"
import AddNoteButton from "../components/AddNoteButton"
import Instructions from "../components/Instructions"
import useGetNotes from "../hooks/useGetNotes"

const NotesWrapper = () => {
  const notes = useGetNotes()
  return (
    <div className="NotesWrapper">
      <AddNoteButton />
      {notes.map(note =>(
        <Note note={note} key={note.id}/>
      ))}
      
      <Instructions />
    </div>
  );
};

export default NotesWrapper;