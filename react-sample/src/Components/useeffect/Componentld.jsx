import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Componentld(){
    const [msg, setMsg] = useState("")
    useEffect(() => {
        setMsg("Component Loaded Sucessfully")
    }, [])

    return(
        <div>
            <h3>{msg}</h3>
        </div>
    )
}

export default Componentld