import React, { useEffect, useState } from "react";

function WindowSize(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added")
    }, [])

    return(
        <>
            <h3>Window width: {width}px</h3>
            <h3>Height width: {height}px</h3>
        </>
    )

}

export default WindowSize