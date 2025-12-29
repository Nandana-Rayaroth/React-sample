import React, { useEffect, useState } from "react";

function MyComponent(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count : ${count} ${color}`
    },[count, color])
    const addCount = () => {
        setCount(count => count + 1)
    }

    const handleColor = () => {
        setColor(color => color === "green" ? "red" : "green")
    }

    const subCount = () =>{
        setCount(count => count - 1)
    }

    return(
        <>   
            <h4 style={{color: color}}>Count: {count}</h4>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Substract</button>
            <button onClick={handleColor}>Change Color</button>
        </>
    )
}

export default MyComponent