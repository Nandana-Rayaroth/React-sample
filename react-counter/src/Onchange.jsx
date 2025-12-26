import { useState } from "react";
 
function Onchange(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comments, setComments] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")
    
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }
    const handleComments = (e) =>{
        setComments(e.target.value)
    }
    const handlePayment = (e) =>{
        setPayment(e.target.value)
    }
    const handleShipping = (e) => {
        setShipping(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleName}></input>
            <p>Name : {name}</p>
            <input type="number" value={quantity} onChange={handleQuantity}/>
            <p>Quantity : {quantity}</p>
            <textarea type="text" value={comments} placeholder="Enter delivery instructions" onChange={handleComments}/>
            <p>Commets: {comments}</p>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>payment : {payment}</p>
            <p>Shipping Mode : {shipping}</p>
            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}/>
                Delivery
            </label>
        </div>
    )
}

export default Onchange