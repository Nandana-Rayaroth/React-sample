import React, { useEffect, useRef, useState } from 'react'

export default function Previous() {

    const [count, setCount] = useState(0)
    const prevCountRef = useRef()
    
    useEffect(() => {
        prevCountRef.current = count
    })

    return(
        <div>
            <p>Previous : {prevCountRef.current}</p>
            <p>Current : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
