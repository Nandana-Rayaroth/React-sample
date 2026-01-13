import React, { createContext, useEffect, useState } from "react";
import ThemeBody from "./ThemeBody";
import ThemeBtn from "./ThemeBtn";

export const ThemeContext = createContext()

function ThemeSwitcher(){

    const [theme, setTheme] = useState(false)

    const handleTheme = () => {
        setTheme(prev => !prev)
    }
    
    useEffect(() => {
        document.body.style.backgroundColor = theme ? "black" : "white"
        document.body.style.color = theme ? "white" : "black"
    }, [theme])

    return (
      <div>
        <ThemeContext.Provider value={{ theme, handleTheme }}>
          <h1>Theme Switcher App</h1>
          <h2>Welcome Every one</h2>
          <ThemeBody />
          <ThemeBtn />
        </ThemeContext.Provider>
      </div>
    );
}

export default ThemeSwitcher