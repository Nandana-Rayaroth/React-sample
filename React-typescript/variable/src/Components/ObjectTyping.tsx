import React from 'react'

type Student = {
    id: number,
    name: string,
    passed : boolean
} 

const obj : Student = {
    id: 54,
    name : "Alexa",
    passed : true
}

export default function ObjectTyping() {
  return (
    <div>
      <h3>Name : {obj.name}</h3>
      <h3>Id : {obj.id}</h3>
      <h3>{obj.passed ? "Passed" : "Failed"}</h3>
    </div>
  )
}
