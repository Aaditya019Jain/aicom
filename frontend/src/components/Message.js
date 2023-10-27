import React, { useState , useEffect} from "react";
import axios from "axios";
import "./Message.css"

export default function Message(props) {


    return(
        <>
            <div>
                <div class = "message" by = "user">
                    <p>
                        {props.user}
                    </p>
                </div>
                <div class = "message" by = "bot">
                    <p>
                        {props.bot}
                    </p>
                </div>
            </div>   
        </>
    )
}

