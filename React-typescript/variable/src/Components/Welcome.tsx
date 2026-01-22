import { useState } from "react"

export default function Welcome({name} : {name : string}) {
    const [user, setUser] = useState<string | null>(null)

    const handleToggle = () => {
        setUser(name)
    }
  return (
    <div>
      <button onClick={handleToggle}>{user ? `Welcome ${name}` : "Please Login"}</button>
    </div>
  )
}
