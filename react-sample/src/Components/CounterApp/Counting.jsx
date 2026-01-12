import React from "react";
import { useState } from "react";

function Counting(){
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(prev => prev + 1)
    }
    const decrease = () => {
        setCount(prev => prev - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
      <div className="OverLay">
        <h1>{count}</h1>
        <div className="buttonContainer">
          <button className="Increase" onClick={increase}>Increase</button>
          <button className="Decrease" onClick={decrease}>Decrease</button>
          <button className="Reset" onClick={reset}>Reset</button>
        </div>
      </div>
    );
}

export default Counting