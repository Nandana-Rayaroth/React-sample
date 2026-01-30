import React, { useReducer } from 'react'
const initialState = {
    name : "",
    email : ""
}

function reducer(state, action){
    switch(action.type){
        case "ChangeInput" : 
            return{
                ...state,
                [action.field] : action.value
            }
        default : 
            return state
    }
}

export default function InputForm() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <form>
        <input
          type="text"
          field="name"
          placeholder="Enter Your Name here..."
          value={state.name}
          onChange={(e) => {
            dispatch({
              type: "ChangeInput",
              field: "name",
              value: e.target.value,
            });
          }}
        />
        <input
          type="email"
          field="email"
          placeholder="Enter Your Email here..."
          value={state.email}
          onChange={(e) => {
            dispatch({
              type: "ChangeInput",
              field: "email",
              value: e.target.value,
            });
          }}
        />
      </form>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
}
