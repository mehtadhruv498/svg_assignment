import React, { useState } from 'react';

function MouseCoordinatesTracker() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  // Function to handle mousemove events and update coordinates
  const handleMouseMove = (event) => {
    const svg = event.target;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
    setMouseCoordinates({ x: svgPoint.x, y: svgPoint.y });
  };

  return (
    <div>
      <h2>Mouse Coordinates Tracker</h2>
      <p>Mouse X: {mouseCoordinates.x.toFixed(2)}</p>
      <p>Mouse Y: {mouseCoordinates.y.toFixed(2)}</p>

      <svg
        width="400"
        height="400"
        onMouseMove={handleMouseMove}
        style={{ border: '1px solid #ccc' }}
      >
      </svg>
    </div>
  );
}

export default MouseCoordinatesTracker;
