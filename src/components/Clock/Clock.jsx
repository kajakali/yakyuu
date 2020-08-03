import React, { Component } from 'react';
import './clock.css';
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';

class Clock extends Component {

/* const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second"); */

/* function runTheClock() {
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(runTheClock, 1000); */

  render(){
      return (
        <div className="Clock">
            <h1>Clock</h1>
            <p>
              I will be a clock
            </p>
            <div class="clockbox">
            <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
                <g id="face">
                    <circle class="circle" cx="300" cy="300" r="253.9"/>
                    <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                    <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
                </g>
                <Hour/>
                <Minute/>
                <Second/>
            </svg>
        </div>
        </div>
      );
  }
}






export default Clock;
