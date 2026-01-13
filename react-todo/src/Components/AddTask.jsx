import React from "react";
import { useState } from "react";

function AddTask(){
    const [task, setTask] = useState("")
    
    const handleInput = (e) => {
        setTask(e.target.value)
    }
    const handleAdd = () => {
        
    }


    return(
        <div className="InpContainer">
            <input className="Inpt" type="text" onChange={handleInput} placeholder="Enter task here..."/>
            <button className="addBtn">Add Task</button>
        </div>
    )
}

export default AddTask 