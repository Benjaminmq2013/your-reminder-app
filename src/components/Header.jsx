import React from "react"
import "../styles/Header.css"
import SearchNotes from "./SearchNotes"
import Profile from "./Profile"

const Header = () =>{
    return(
        <nav className="Navbar">
            <SearchNotes/>
            <Profile />
        </nav>
    )
}

export default Header;