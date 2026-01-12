import React, {useContext} from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./ComponentA";
function ComponentB(){
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>Component B</h1>
            <h2>{`Hello again ${user }`}</h2>
            <ComponentC/>
        </div>
    )
} 

export default ComponentB

// useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level 
// PROVIDER COMPONENT
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext()
// 3.   <MyContext.Provider value={value}>
//          <Child/>
//      </MyComponent.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import {MyContext} from './ComponentA'
// 2. const value = useContext(MyContext)