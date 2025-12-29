import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interValid = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(interValid)
        }
    } , [])

    function FormatTime(){
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        let meridian = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12
        return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)} ${PadZero(meridian)}`
    }

    function PadZero(number){
        return(number < 10 ? "0": "") + number
    }

    return(
        <div className="clockContainer">
            <div className="clock">
                <h1>{FormatTime()}</h1>
            </div>
        </div>
    )
}

export default DigitalClock