import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function StartAndStop() {
    const [second, setSecond] = useState(0)
    const timeRef = useRef(null)

    const handleStart = () => {
        if(timeRef.current !== null) return
        timeRef.current = setInterval(() => {
            setSecond(prev => prev + 1)
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(timeRef.current)
        timeRef.current = null
    }
  return (
    <div>
      <h3>{second}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
