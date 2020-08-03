import React from 'react';


function Minute(props) {
  return (
    <g id="minute" style={{transform: `rotate(${props.rotation}deg)`}} >
        <path className="minute-arm" d="M300.5 298V67"/>
        <circle className="sizing-box" cx="300" cy="300" r="253.9"/>
    </g>
  );
}

export default Minute;
