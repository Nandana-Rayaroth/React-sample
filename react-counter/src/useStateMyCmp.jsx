import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("Bro")
    const [age, setAge] = useState(0)
    const [status, setStatus] = useState(false)

    const updateName = () => {
        setName("Spongebob")
    }
    const updateAge = () => {
        setAge(age+1)
    }
    const toggleStatus = () => {
        setStatus(!status)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Is Employed : {status ? "Yes" : "No"}</p>
            <button onClick={toggleStatus}>Toggle Status</button>
        </div>
    )
}

export default MyComponent