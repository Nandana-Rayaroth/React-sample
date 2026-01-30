import React, { useReducer, useState } from 'react'

const initialState = {
    todos: []
}
function reducer(state, action){
  switch(action.type){
    case "ADD_TODO" : 
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      }
    case "TOGGLE_TODO" : 
      return{
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
      }
    case "DELETE_TODO" : 
      return{
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default: 
      return state
  }

}
export default function Todo() {
    const[state, dispatch] = useReducer(reducer, initialState)
    const [text, setText] = useState("")
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: text });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


