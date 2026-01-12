import React from "react";

function ChildBtn({IncreaseFn}){

    return(
        <div>
            <button onClick={IncreaseFn}>Increase</button>
        </div>
    )
}

export default ChildBtn