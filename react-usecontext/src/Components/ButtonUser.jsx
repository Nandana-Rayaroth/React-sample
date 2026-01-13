import React, { useContext } from "react";
import { AuthContext } from "./AuthContex";

function ButtonUser(){
    const {isLogged, handleLogin} = useContext(AuthContext);
    return(
        <div>
            <button onClick={handleLogin}>{isLogged ? "Logout" : "Login"}</button>
        </div>
    )
}

export default ButtonUser