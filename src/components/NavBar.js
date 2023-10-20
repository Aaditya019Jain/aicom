import React from "react";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return(
    <>
    <div className="navbar">
        <div className="buttonga">
            <button className="button">
                + New Chat
            </button>
            <button className="squarebutton">
                <FontAwesomeIcon icon={faMicrochip} />
            </button>
        </div>

    </div>
    </>
    )
}