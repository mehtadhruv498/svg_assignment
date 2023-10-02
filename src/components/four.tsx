import React, { useState } from 'react';
import './__four.scss'; 

function AnimatedShape() {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);

    // Reset the animation after a delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); 
  };

  return (
    <div>
      <h2>Animated Shape</h2>
      <button onClick={startAnimation}>Start Animation</button>
      <svg width="200" height="200">
        <rect
          className={`animated-square ${isAnimating ? 'animate' : ''}`}
          x="50"
          y="50"
          width="100"
          height="100"
        />
      </svg>
    </div>
  );
}

export default AnimatedShape;
