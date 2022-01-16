import React from "react"
import Note from "../components/Note"
import "../styles/NotesWrapper.css"
import AddNoteButton from "../components/AddNoteButton"
import Instructions from "../components/Instructions"

const NotesWrapper = () => {
  return (
    <div className="NotesWrapper">
      <AddNoteButton />
      <Note />

      <Instructions />
    </div>
  );
};

export default NotesWrapper;