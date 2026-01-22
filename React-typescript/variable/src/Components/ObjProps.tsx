import React from 'react'

type Student = {
    id: number,
    name : string,
    passed : boolean
}

type Props = {
    student : Student
}

export default function ObjProps({student} : Props) {
  return (
    <div>
      <h3>{student.name}</h3>
      <h3>{student.id}</h3>
      <h3>{student.passed ? "Passed" : "Failed"}</h3>
    </div>
  )
}
