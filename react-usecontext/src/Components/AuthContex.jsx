import React, { createContext, useState } from "react";
import ButtonUser from "./ButtonUser";

export const AuthContext = createContext()

function Authenticator(){
    const[isLogged, setIsLogged] = useState(false)
    const handleLogin = () => {
        setIsLogged(prev => !prev)
    }

    return(
        <div>
            <AuthContext.Provider value={{isLogged, handleLogin}}>
                <ButtonUser />
            </AuthContext.Provider>
        </div>
    )
}

export default Authenticator