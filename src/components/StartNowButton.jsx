import React from "react"
import { Link } from "react-router-dom" 
import "../styles/StartNowButton.css"

const StartNowButton = () => {
    return(
        <Link className="StartNowButton" to="/notes">┬íComienza ya!</Link>
    );
}

export default StartNowButton;