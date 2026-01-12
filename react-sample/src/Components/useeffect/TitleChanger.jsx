import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function TitleChanger(){

    const [count, SetCount] = useState(0)

    useEffect(() => {
        document.title = `${count} times clicked`
    }, [count])

    const handleCount = () => {
        SetCount(prev => prev + 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Increase</button>
        </div>
    )
}

export default TitleChanger