import React, { useEffect, useRef } from "react";

function Autofocus(){

    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [])
    return(
        <div>
            <input ref={ref}/>
        </div>
    )
}

export default Autofocus