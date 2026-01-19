import { useState } from "react"
import BillComponent from "./Components/BillComponent"
import ServiceComponent from "./Components/ServiceComponent"
import Reset from "./Components/Reset"


function App() {
  const [bill, setBill] = useState("")
  const [percentage, setPercentage] = useState(0)
  const [percentage2, setPercentage2] = useState(0)
  const tip = bill * ((percentage + percentage2) / 2) / 100;

  const handleReset = () => {
    setBill("")
    setPercentage(0)
    setPercentage2(0)
  }
  return (
    <>
      <BillComponent bill={bill} onSetBill={setBill} />
      <ServiceComponent percentage={percentage} onsetPercentage={setPercentage}>
        <span>How much was the bill ?</span>
      </ServiceComponent>
      <ServiceComponent percentage={percentage2} onsetPercentage={setPercentage2}>
        <span>How did your friend like the service ?</span>
      </ServiceComponent>

      <h1>You pay ${bill+tip} (${bill ? bill : 0 } + ${(percentage+percentage2)/2}tip)</h1>

      <Reset onReset = {handleReset}/>
    </>
  );
}

export default App
