import { useEffect, useState } from "react"

export default function BtnEvent() {
    const [clk, setClk] = useState<string>("")
    const handleClick = () => {
        setClk("Button Clicked")
    }
    useEffect(() => {
        console.log(clk)
    }, [clk])
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        <p>{clk}</p>
    </div>
  )
}
