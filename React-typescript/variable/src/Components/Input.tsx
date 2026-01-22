import React, { useState } from "react"

export default function Input() {
    const [inp, setInp] = useState<string>("")

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInp(e.target.value)
    }
    const handleClear = () => {
        setInp("")
    }
  return (
    <div>
      <input
        className="border p-2 rounded-lg"
        type="text"
        placeholder="Enter any text"
        onChange={handleInput}
        value={inp}
      />
      <p>{inp}</p>
      <button className="p-2 rounded-lg bg-fuchsia-700 mt-4" onClick={handleClear}>Clear</button>
    </div>
  );
}
