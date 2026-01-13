import React from "react";
import ThemeChild2 from "./ThemeChild2";

function ThemeChild1(){

    return(
        <div className="box">
            <h2>This is first child</h2>
            <ThemeChild2/>
        </div>
    )
}

export default ThemeChild1