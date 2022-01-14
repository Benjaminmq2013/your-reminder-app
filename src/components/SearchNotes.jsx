import React from "react";
import "../styles/SearchNotes.css";
import search_icon from "../assets/icons/search_icon.svg";

const SearchNotes = () => {
  return (
    <div className="input-container">
      <input className="Search-Notes" placeholder="Buscar..." />
      <figure className="Search_icon--container">
        <img className="Search_icon" src={ search_icon } alt="" />
      </figure>
    </div>
  );
};

export default SearchNotes;
