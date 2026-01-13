import React from "react";
import { useState } from "react";

function AddItem({add}){

    const [value, setValue] = useState("")

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    return (
      <div className="InpContainer">
        <input
          className="Inpt"
          type="text"
          onChange={handleInput}
          placeholder="Enter task here..."
        />
        <button onClick={() => add(value)} className="addBtn">Add Task</button>
      </div>
    );
}

export default AddItem