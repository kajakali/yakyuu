import React, { Component } from 'react';
import './clock.css';
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';
import Face from './Face';

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
                <Face/>
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
