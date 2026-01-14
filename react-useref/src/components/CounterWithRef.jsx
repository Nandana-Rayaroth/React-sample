import React, { useEffect, useRef, useState } from "react";

function CounterWithRef(){

    const [count, setCount] = useState(0)
    const userRef = useRef(0)

    useEffect(() => {
        userRef.current = count
    }, [count])

    const handleAdd = () => {
        setCount((prev) => prev + 1)
    }

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default CounterWithRef