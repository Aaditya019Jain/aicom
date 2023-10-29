import React from "react";
import "./login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Login(){

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
        <div className="loginpage">
            <div className="loginbox">
                <div className="inputusericon">
                    <FontAwesomeIcon icon={faUser} color="black"/>
                    <input type="text" placeholder="Username" className="logininput"/>
                </div>
                <div className="inputusericon">
                    <FontAwesomeIcon icon={faLock} color="black"/>
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="logininput"/>
                    <button onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                </div>
                <a href='/textarea'className="loginbutton">Sign In</a>
            </div>
        </div>
    )
}