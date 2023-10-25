import React, { useState , useEffect} from "react";
import axios from "axios";
import "./Message.css"

export default function Message(props) {

    const[message, setMessage] = useState({
        search_data:'',
    });
    useEffect(() => {
    axios.get('api/search/')
    .then((response) => {      
        console.log(response.data);
        setMessage(response.data[0]);

    }).catch((error) => {
        console.log(error);

    })},[]);

    return(
        <>
            <div class = "message" by = "user">
                <p>
                    {message.search_data}
                </p>
            </div>
            <div class = "message" by = "bot">
                <p>
                    {message.search_data}
                </p>
            </div>
        </>
    )
}
