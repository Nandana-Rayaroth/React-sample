import React, { useState } from 'react'

export default function Counter() {
    const [count, setCounter] = useState<number>(0)

    const handleIncrease = () => {
      setCounter((prev) => prev + 1)
    }
    const handleDcrease = () => {
      setCounter((prev) => prev - 1)
    }
    const handleReset = () => {
      setCounter(0)
    }
  return (
    <div>
      <h1>{count}</h1>
      <div className="flex justify-center gap-8">
        <button
          className="border p-2 rounded-lg shadow-lg shadow-gray-400"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="border p-2 rounded-lg shadow-lg shadow-gray-400"
          onClick={handleDcrease}
        >
          Decrease
        </button>
        <button
          className="border p-2 rounded-lg shadow-lg shadow-gray-400"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
