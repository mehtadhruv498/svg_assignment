import React from 'react';

function MyCanvas({ circleX, circleY, rectX, rectY }) {
  return (
    <svg width="400" height="400">
      {/* Render a circle */}
      <circle cx={circleX} cy={circleY} r="20" fill="blue" />

      {/* Render a rectangle */}
      <rect x={rectX} y={rectY} width="50" height="30" fill="green" />
    </svg>
  );
}

export default MyCanvas;
