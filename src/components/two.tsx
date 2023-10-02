import React, { useState } from 'react';

function CircleWithInput() {
  const [radius, setRadius] = useState(50);
  const handleRadiusChange = (event) => {
    const newRadius = parseFloat(event.target.value);
    if (!isNaN(newRadius)) {
      setRadius(newRadius);
    }
  };

  return (
    <div>
      <h2>Circle with Input</h2>
      <label htmlFor="radiusInput">Enter Radius:</label>
      <input
        type="number"
        id="radiusInput"
        value={radius}
        onChange={handleRadiusChange}
      />

      <svg width="200" height="200">
        <circle cx="100" cy="100" r={radius} fill="blue" />
      </svg>
    </div>
  );
}

export default CircleWithInput;
