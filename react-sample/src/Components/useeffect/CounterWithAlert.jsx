import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CounterWithAlert(){

    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(prev => (prev + 1))
    }

    useEffect(() => {
        if(count === 10){
          alert("counter reaches its limit");
        }
    }, [count])

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={handleCount}>Increase</button>
        </div>
    )
}

export default CounterWithAlert