import React from "react";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
    return(
    <>
    <div className="navbar">
        <div >
            <button className="button">
                + New Chat
            </button>
            <button className="squarebutton">
                <FontAwesomeIcon icon={faMicrochip} />
            </button>
        </div>
        <div className="buttonga">
            <hr color="#40414f"></hr>
            <button className="upgradeButton">
                <FontAwesomeIcon icon={faUser} color="white"/>
            </button>
            <label> Upgrade to Pro</label>
            <br />
            <label className="user">UserName</label>
        </div>
    </div>
    </>
    )
}
