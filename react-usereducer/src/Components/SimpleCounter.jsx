import React, { useReducer } from 'react'

const initialState = {count : 0}
function reducer(state, action){
    switch(action.type){
        case "INCREMENT" : 
            return{count : state.count + 1};
        case "DECREMENT" : 
            return{count : state.count - 1};
        case "RESET" : 
            return initialState;
        default: 
            return state;
    }
}
export default function SimpleCounter() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>Decrease</button>
      <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
    </div>
  )
}
