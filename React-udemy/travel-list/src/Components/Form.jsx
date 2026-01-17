import React from 'react'
import { useState } from 'react';

export default function Form() {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(5)
    const [items, setItems] = useState([])

    function handleAddItem(item) {
      setItems((item) => [...items, item])
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newItem = {description, quantity, packed : false, id: Date.now()}
        console.log(newItem)
        setDescription("")
        setQuantity(1)
    }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
                {num}
            </option>
        ))}
      </select>
      <input type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={() => handleAddItem()}>Add</button>
    </form>
  );
}
