import React from 'react';


function Hour(props) {
  return (
    <g id="hour" style={{transform: `rotate(${props.rotation}deg)`}}  >
        <path class="hour-arm" d="M300.5 298V142"/>
        <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
    </g>
  );
}

export default Hour;
