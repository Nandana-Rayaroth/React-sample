import React from "react";
import ChildList from "./ChildList";

function ParentList() {

    const userList = ["Alex", "John", "Chacko"]
    return(
        <div>
            {userList.map((name, index) => 
                <ChildList key={index} name={name}/>
            )}
        </div>
    )
}

export default ParentList