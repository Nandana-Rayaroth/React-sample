import React, { useContext } from "react";
import { ThemeContext } from "./ThemeSwitcher";

function ThemeBtn(){
    const {theme, handleTheme} = useContext(ThemeContext)
    return (
      <div>
        <button onClick={handleTheme}>
          {theme ? "Change into light Mode" : "Change to Dark Mode"}
        </button>
      </div>
    );
}

export default ThemeBtn