// import React, { useRef } from "react";

// function MuteInp(){
//     const ref = useRef(null)
    
//     const handleInput = () => {
//         ref.current.value = "Hello world"
//     }
//     return(
//         <div>
//             <input ref={ref} type="text"/>
//             <button onClick={handleInput}>Save</button>
//         </div>
//     )
// }

// export default MuteInp

import React, { useRef } from "react";

function MuteInp(){
    const ref = useRef(null)

    const handleInput = () => {
        ref.current.value = ""
    }

    return(
        <div>
            <input ref={ref} type="text"/>
            <button onClick={handleInput}>Save</button>
        </div>
    )
}

export default MuteInp