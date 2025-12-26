import { useState } from "react";

function ColorPicker(){

    const [color, setColor] = useState("#ffffff")

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    return (
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="SelectedBox" style={{backgroundColor: color}}>Selected Color : {color}</div>
        <div className="selectionContainer">
          <label>Select a Color : </label>
          <input type="color" value={color} onChange={handleColor} />
        </div>
      </div>
    );
}

export default ColorPicker