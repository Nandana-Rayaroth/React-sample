import React from "react";

function Skill({skill, bgcolor}){

    const style = {
        backgroundColor : bgcolor
    }
    return(
        <li className="skill" style={style}>{skill}</li>
    )
}

export default Skill