import React, {useEffect} from "react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import AddItem from "./AddItem";

function TodoContainer(){
    const [data, setData] = useState([])

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
         .then((data) => data.json())
         .then((result) => setData(result));
    }, []);

    const add = (title) => {
        if(title.trim() === "") return
        const newAdd = {
            id: Date.now(),
            title,
            completed : false
        }
        setData(prev => [newAdd, ...prev])
    }
    
    const toggleComplete = (id) => {
        setData(prev => (
            prev.map(item => item.id === id ? {...item, completed : !item.completed} : item)
        ))
    }

    const handleDelete = (id) => {
        setData(prev => prev.filter(item => item.id !== id))
    }

    return(
        <div>
            <AddItem add={add}/>
            <TaskItem item={data} toggle={toggleComplete} deleteFn={handleDelete}/>
        </div>
    )
}

export default TodoContainer