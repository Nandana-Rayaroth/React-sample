import React from "react";

function ChildLogin({isLogin}){

    return(
        <div>
            <h2>{isLogin ? "Logged" : "Logout"}</h2>
        </div>
    )
}
export default ChildLogin