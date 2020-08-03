import React from 'react';


function Second(props) {
  return (
    <g id="second" style={{transform: `rotate(${props.rotation}deg)`}} >
        <path class="second-arm" d="M300.5 330V55"/>
        <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
    </g>
  );
}

export default Second;
