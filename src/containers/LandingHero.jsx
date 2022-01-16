import React from "react"
import "../styles/LandingHero.css"
import LandingImage from "../assets/icons/document_icon.svg"
import StartNowButton from "../components/StartNowButton"

const LandingHero = () => {
    return(
        <div className="LandingHero">
            <img className="LandingImage" src={ LandingImage } alt="" />
            <h2 className="HeroTitle">Your Reminder App</h2>
            <h3 className="HeroSubtitle">
                ¡No olvides más las cosas importantes! <br />
                Toma notas y visítalas desde tu móvil.
            </h3>
            <StartNowButton />
        </div>
    );
}

export default LandingHero;