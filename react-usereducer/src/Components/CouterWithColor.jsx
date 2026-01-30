import React, { useReducer } from 'react'

const initialState = {
    value: 0,
    color : "tomato"
}

function reducer(state, action){
    switch(action.type){
        case "change-count" : 
            return {
                ...state,
                value : state.value + action.payLoad
            }
        case "change-color" :
            return {
                ...state,
                color : action.payLoad
            }
        default:
            return state;
    }
}

export default function CouterWithColor() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1 style={{ backgroundColor: state.color }}>{state.value}</h1>
      <button onClick={() => dispatch({type : "change-count", payLoad : 1})}>Increment</button>
      <button onClick={() => dispatch({type : "change-count", payLoad : -1})}>Decrement</button>
      <button onClick={() => dispatch({type : "change-color", payLoad : "blue"})}>Blue</button>
      <button onClick={() => dispatch({type : "change-color", payLoad : "green"})}>Green</button>
    </div>
  );
}
