
import React, { useState } from "react";

function ColorPicking() {
    const [color, setColor] = useState("#FFFFFF");

    function handleColor(e) {
        setColor(e.target.value);
    }
    return (
        <div className="color-container">
            <h1>Pick a color</h1>
            <div className="display-color" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
        </div>
        <label>Selet a color</label>
        <input type="color" onChange={handleColor}/>

    </div >
   );
}

export default ColorPicking