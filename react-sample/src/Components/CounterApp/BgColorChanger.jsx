import React from "react";
import { useState } from "react";

function BgColorChanger(){
    const [bgClr, setBgClr] = useState("pink")

    const handleBgClr = () => {
        setBgClr(prev => (prev === "pink" ? "tomato" : "pink"))
    }
    const styleObj = {
        backgroundColor : bgClr
    }
    return(
        <div className="bgSetter" style={styleObj}>
            <button onClick={handleBgClr}>Change Background</button>
        </div>
    )
}

export default BgColorChanger