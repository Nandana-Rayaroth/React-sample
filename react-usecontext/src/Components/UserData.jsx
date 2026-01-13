import React from "react";
import UserDisplay from "./UserDisplay";
import { UserContext } from "./Usercontext";

function UserData(){

    const username = "Alex"

    return(
        <div className="box">
            <UserContext.Provider value={username}>
                <UserDisplay />
            </UserContext.Provider>
        </div>
    )
}

export default UserData