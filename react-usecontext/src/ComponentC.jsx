import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC(){
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h3>{`Bye ${user}`}</h3>
        </div>
    )
}

export default ComponentC