import React from "react";
import { useState } from "react";

function CharacterCount(){
    const [char, setChar] = useState("")

    const handleChar = (e) => {
        setChar(e.target.value)
    }

    return(
        <div>
            <textarea onChange={handleChar}/>
            <h4>Characters : {char.length}</h4>
        </div>
    )
}

export default CharacterCount