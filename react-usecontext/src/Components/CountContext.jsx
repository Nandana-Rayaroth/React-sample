import React, { useState } from "react";
import IncrementBtn from "./IncrementBtn";
import { CounterContext } from "./CounterContex";

function CountContext(){
    const[count, setCount] = useState(0)
    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => prev - 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <CounterContext.Provider value={{increment, decrement}}>
                <IncrementBtn/>
            </CounterContext.Provider>
        </div>
    )
}

export default CountContext