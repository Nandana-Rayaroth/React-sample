import React from 'react'

type Props = {
    age: number,
    username : string,
    isAdmin: boolean
}
export default function VaribaleTyping({age, username, isAdmin} : Props) {
  return (
    <div>
      <h2>Name : {username}</h2>
      <h3>Age : {age}</h3>
      <h3>Admin : {isAdmin}</h3>
    </div>
  )
}
