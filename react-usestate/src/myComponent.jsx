import { useState } from "react";

function MyComponent(){

    const [food, setFood] = useState(["Apple", "Orange", "Banana"])

    const handleFood = () => {
        const newFood = document.getElementById("Input").value
        document.getElementById("Input").value = ""
        setFood([...food, newFood])
    }
    const handleRemoveFood = (index) => {
        setFood(food.filter((_, i) => i!== index))
    }

    return(
        <div>
            <h2>List of food</h2>
            <ul>
                {food.map((item, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{item}</li>)}
            </ul>
            <input id="Input" type="text" placeholder="Enter food name"/>
            <button onClick={handleFood}>Add Food</button>
        </div>
    )
}

export default MyComponent