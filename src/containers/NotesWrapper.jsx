import React from "react"
import Note from "../components/Note"
import "../styles/NotesWrapper.css"
import AddNoteButton from "../components/AddNoteButton"

const NotesWrapper = () => {
  return (
    <div className="NotesWrapper">
      <AddNoteButton />
      <Note />
    </div>
  );
};

export default NotesWrapper;