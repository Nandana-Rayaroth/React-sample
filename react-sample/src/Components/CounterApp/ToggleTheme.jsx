import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ToggleTheme(){
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        document.body.style.backgroundColor = isDark ? "#121212" : "#ffffff"
        document.body.style.color = isDark ? "#ffffff" : "#121212"
    }, [isDark])

    const handleTheme = () => {
        setIsDark(prev => !prev)
    }

    return(
        <div>
            <h2>Hello, welcome back...</h2>
            <h5>Theme : {isDark ? "Dark" : "light"}</h5>
            <button onClick={handleTheme}>Change Theme</button>
        </div>
    )
}

export default ToggleTheme