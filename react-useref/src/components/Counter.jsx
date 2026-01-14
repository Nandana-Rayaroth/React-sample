import React, { useRef } from "react";

function Counter(){

    const ref = useRef(0)
    const handleAdd = () => {
        ref.current += 1
        console.log(ref.current)
    }
    return(
        <div>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Counter