import React from "react";
import "./login.css"

export default function Login(){
    return (
        <div className="loginpage">
            <div className="loginbox">
                <input type="text" placeholder="Username" className="logininput"/>
                <input type="text" placeholder="Password" className="logininput"/>
                <a href='/textarea'>Login</a>
            </div>
        </div>
    )
}