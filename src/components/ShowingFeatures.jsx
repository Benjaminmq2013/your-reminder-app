import React from "react"
import "../styles/ShowingFeatures.css"
import check_mark from "../assets/icons/check-mark.svg"
import take_note from "../assets/icons/take-note.svg"
import colors_icon from "../assets/icons/colors.svg"

const ShowingFeatures = () => {
    return(
        <div className="ShowingFeatures-Wrapper">
            <div className="feature">
                <img src={check_mark} alt="" />
                <h3 class="feature_title">Marca las tareas completadas</h3>
            </div>
            <div className="feature">
                <img src={take_note} alt="" />
                <h3 class="feature_title">Toma nota de tus objetivos</h3>
            </div>
            <div className="feature">
                <img src={colors_icon} alt="" />
                <h3 class="feature_title">Añade un toque personal</h3>
            </div>
        </div>

    );
}

export default ShowingFeatures;