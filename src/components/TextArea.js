import React from "react";
import "./TextArea.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function TextArea() {


const [text, setText] = useState('');
      
const handleTextareaChange = (e) => {
    setText(e.target.value);
 };

    return(
    <div className="textarea">
        <input type="text" placeholder="type your text here" className="input" onChange={handleTextareaChange}
        value={text} />
        <button className="ad">
            <FontAwesomeIcon icon={faPaperPlane} />
        </button>
    </div>

    )
}