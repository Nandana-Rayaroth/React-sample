import React from "react";
import { useState } from "react";

function InputField() {
    const [text, setText] = useState("")

    const handleInput = (e) => {
        setText(e.target.value)
    }
    return(
        <>
            <input type="text" onChange={handleInput}/>
            <p>{text}</p>
        </>
    )
}

export default InputField