import React from 'react'

export default function BillComponent({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill ?</span>
      <input type="number" placeholder='Bill value' value={bill} onChange={(e) => onSetBill(Number(e.target.value))}/>
    </div>
  );
}
