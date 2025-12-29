import React, {useState} from "react";

function TodoComponent(){
    const [task, setTask] = useState([
         { id: 1, task: "Eate breakfast", completed : false},
         {id: 2, task : "Take a shower", completed : false}, 
         {id: 3, task : "Walk the dog", completed : false}
        ])
    const [todo, setTodo] = useState("")

    function handleInput(event){
        setTodo(event.target.value)
    }

    function handleAdd(){
        // if(todo.trim() === "") return
        // setTask(task => [...task, todo])
        // setTodo("")

        if(todo.trim() === "") return
        let ind = Date.now()
        setTask(task => [...task, {id: ind, task: todo, completed : false}])
        setTodo("")
    }

    function handleDelete(id){
        // setTask(task.filter((_, i) => i !== index))
        setTask(task => task.filter(item => item.id !== id))
    }
    function handleToggle(id){
        setTask(task => task.map((item) => item.id === id ? {...item, completed : !item.completed} : item))
    }

    return (
      <>
        <div className="dotoOverlay">
          <h2>To Do App</h2>
          <input
            className="InputContainer"
            placeholder="Enter a task"
            onChange={handleInput}
            value={todo}
          />
          <button onClick={handleAdd} className="addBtn">
            Add task
          </button>

          <ul className="itemContainer">
            {task.map((item) => (
              <li style={{textDecoration: item.completed ? "line-through" : "none"}} key={item.id}>
                <input className="checkBox" type="checkbox" onChange={() => handleToggle(item.id)}/>
                <span className="taskText">{item.task}</span>
                <button onClick={() => handleDelete(item.id)} className="dltBtn">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default TodoComponent