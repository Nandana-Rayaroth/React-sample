import React, { useState } from "react";

function CountComponent({count}){

    const[value, setValue] = useState(0)

    const handleValueIncrease = () => {
        setValue(prev => prev + count)
    }
    const handleValueDecrease = () => {
        setValue(prev => prev - count)
    }
    const date = new Date("june 21 2027")
    date.setDate(date.getDate() + value)
    return(
        <div>
            
            <button onClick={handleValueDecrease}> - </button>
            {/* <span>Count : {value}</span> */}
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleValueIncrease}> + </button>
            <div>
                <p>
                    {value === 0 ? "Today is " : value > 0 ? `${value} days from today is` : `${Math.abs(value)} days ago was `}
                    <span>{date.toDateString()}</span>
                </p>
            </div>
        </div>
    )
}

export default CountComponent