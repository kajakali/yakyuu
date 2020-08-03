import React from 'react';


function Minute(props) {
  return (
    <g id="minute" style={{transform: `rotate(${props.rotation}deg)`}} >
        <path class="minute-arm" d="M300.5 298V67"/>
        <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
    </g>
  );
}

export default Minute;
