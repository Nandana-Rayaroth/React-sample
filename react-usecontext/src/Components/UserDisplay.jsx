import React, { useContext } from "react";
import { UserContext } from "./Usercontext";

function UserDisplay(){
    const user = useContext(UserContext)
    return(
        <div>
            <h2>Welcome, {user}</h2>
        </div>
    )
}

export default UserDisplay