import React from 'react';

function SvgWithEvents() {
  // Function to handle the click event
  const handleClick = () => {
    alert('SVG Element Clicked!');
  };

  // Function to handle the mouseover event
  const handleMouseOver = () => {
    console.log('Mouse Over SVG Element');
  };

  // Function to handle the mouseleave event
  const handleMouseLeave = () => {
    console.log('Mouse Leave SVG Element');
  };

  return (
    <svg
      width="200"
      height="200"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {/* Render your SVG content here */}
      <circle cx="100" cy="100" r="50" fill="blue" />
    </svg>
  );
}

export default SvgWithEvents;
