import React, { useContext } from "react";
import { ThemeContext } from "./ThemeParent";
function ThemeChild2(){
    const theme = useContext(ThemeContext);
    return(
        <div className="box">
            <h3>This is theme Child2</h3>
            <h4>Theme : {theme}</h4>
        </div>
    )
}

export default ThemeChild2