import React, {useState} from "react";


function ShowAndHide(){

    const [isShow, setIsShow] = useState(false)

    const togglVisibility = () => {
        setIsShow(!isShow)
    }
    
    return(
        <div className="showContainer">
            <button onClick={togglVisibility}>{isShow ? "Hide" : "Show"}</button>
            {isShow && <h3>Hello Welcome back...</h3> }
        </div>
    )
}
export default ShowAndHide