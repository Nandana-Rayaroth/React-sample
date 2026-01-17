import React, { useState } from "react";
import CountComponent from "./CountComponent";

function StepComponent(){
    const [steps, setSteps] = useState(1)

    // const handleStepDecrease = () => {
    //     setSteps(prev => prev - 1)
    // }

    // const handleStepIncrease = () => {
    //     setSteps(prev => prev + 1)
    // }

    return (
      <div>
        <input type="range" min="1" max="10" value={steps} onChange={(e) => setSteps(Number(e.target.value))} /> <span>{steps}</span>

        {/* <button onClick={handleStepDecrease}> - </button>
            <span>Steps : {steps}</span>
            <button onClick={handleStepIncrease}> + </button> */}

        <CountComponent count={steps} />
      </div>
    );
}

export default StepComponent