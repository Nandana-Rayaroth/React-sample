import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddTask from "./AddTask";
import Fetch from "./Fetch";
import TaskItem from "./TaskItem";


function TodoContainer(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
          .then((data) => data.json())
          .then((result) => setData(result));
    }, [])

    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            completed : false
        }
        setData(prev => [newTask, ...prev])
    }

    return(
        <div>
            <AddTask addTask={addTask}/>
            <TaskItem value={data}/>
        </div>
    )
}

export default 