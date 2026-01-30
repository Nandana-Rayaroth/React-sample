import React, { useReducer } from 'react'
const initialState = {
    isOn : false
}
function reducer(state, action){
    switch (action.type){
        case "Toggle" : 
            return {
                isOn : !state.isOn
            }
        default :
            return state
    }
}

export default function ToggleLight() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => dispatch({type : "Toggle"})}>{state.isOn ? "Light ON" : "Light OFF"}</button>
    </div>
  )
}
