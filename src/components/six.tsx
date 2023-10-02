import React from 'react';

function CurvePath() {
  return (
    <svg width="300" height="200">
      <path
        d="M 10 80
           C 40 10, 65 10, 95 80
           S 150 150, 180 80
           Q 200 10, 230 80
           T 270 80
           A 5 5, 0, 1, 0, 280 80
           L 300 80
           L 300 150
           L 10 150
           Z"
        fill="blue"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export default CurvePath;
