import React from "react";
import { useState } from "react";
import ChildBtn from "./ChildBtn";

function ParentBtn(){

    const [count, setCount] = useState(0)

    const handleIcreases = () => {
        setCount(prev => (prev + 1))
    }

    return (
      <div>
        <h3>{count}</h3>
        <ChildBtn IncreaseFn={handleIcreases}/>
      </div>
    );
}

export default ParentBtn