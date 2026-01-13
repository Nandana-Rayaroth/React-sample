import React, { createContext } from "react";
import ThemeChild1 from "./ThemeChild1";

export const ThemeContext = createContext()

function ThemeParent(){
    const theme = "light"

    return (
      <div className="box">
        <h2>This is parent</h2>
        <ThemeContext.Provider value={theme}>
          <ThemeChild1 />
        </ThemeContext.Provider>
      </div>
    );
}
export default ThemeParent