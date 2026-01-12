import React from "react";
import { useState } from "react";
import ChildLogin from "./ChildLogin";

function ParentLogin(){

    const [isloged, setIsloged] = useState(false)
    return (
      <div>
        <ChildLogin isLogin={isloged}/>
      </div>
    );
}

export default ParentLogin