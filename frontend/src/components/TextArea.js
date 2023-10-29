import React from "react";
import "./TextArea.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Message from "./Message";
import axios from "axios";
import { useEffect } from "react";

export default function TextArea() {


const [text, setText] = useState({
    search_data:'',
});
      
const handleTextareaChange = (e) => {
    const { id, value } = e.target;
    // console.log(value);
    setText((prevText) => (
        // value
        {
      ...prevText,
      [id]: value,
    }
    ));
  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    axios.post("api/search/",text)
    .then(res =>
        console.log("hello")
    )
    .catch(err => console.log(err));
    axios.get('api/search/')
.then((response) => {      
    // console.log(response.data);
    setMessage(response.data);

}).catch((error) => {
    console.log(error);
})
}

const[message, setMessage] = useState([]);


    return(
    <div className="textarea">
        <div className="messagearea">
        {message.map((message,index) =>(
            console.log(text),
            <div className="tujamazaa" key ={index} >
                <Message bot={message.search_data} user={message.search_data}/>
            </div>
        ))}
        </div>
        <div className="inputbutton">
            <input type="text" id='search_data' placeholder="type your text here" className="input" onChange={handleTextareaChange}
            value={text.search_data} />
            <button onClick={handleSubmit} className="ad">
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    </div>

    )
}