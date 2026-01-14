import React, { useRef } from "react";

function InputFocus(){
    const ref1 = useRef(null)
    const ref2 = useRef(null)

    const handleInput = () => {
        ref1.current.focus()
        ref1.current.style.backgroundColor = "pink"
    }
    const handleInput2 = () => {
        ref2.current.focus()
        ref2.current.style.backgroundColor = "tomato"
    }
    return(
        <div>
            <input ref={ref1} type="text"/><button onClick={handleInput}>Click Me</button><br/>
            <input ref={ref2} type="text"/><button onClick={handleInput2}>Click Me</button>
        </div>
    )
}

export default InputFocus