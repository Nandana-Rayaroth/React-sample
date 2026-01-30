import React, { useReducer } from 'react'

const initialState = {
    value : 0
}
function reducer(state, action){

    switch(action.type){
        case "Increment" : 
            return {
                value : state.value + action.payLoad
            }
        case "Decrement" : 
            return {
                value : state.value - action.payLoad
            }
        case "Reset" : 
            return {
               value : initialState.value
            }
        default : 
            return state
    }
}
export default function IncrementByNum() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={() => dispatch({type : "Increment", payLoad : 1})}>Increment by 1</button>
      <button onClick={() => dispatch({type : "Decrement", payLoad : 1})}>Decrement by 1</button>
      <button onClick={() => dispatch({type : "Increment", payLoad : 5})}>Increment by 5</button>
      <button onClick={() => dispatch({type : "Reset"})}>Reset</button>
    </div>
  )
}
