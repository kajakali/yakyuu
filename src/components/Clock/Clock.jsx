import React, { Component } from 'react';
import './clock.css';
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';
import Face from './Face';

class Clock extends Component {

  state = ({
    date: new Date(),
  });

  componentDidMount(){
    setInterval(
      () => {this.setState({date: new Date()})}, 1000
    );
  }


 




 
 



  render(){
      return (
        <div className="Clock">
            <h1>Clock</h1>
            <p>
              I am a clock
            </p>
            <div className="clockbox">
            <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
                <Face/>
                <Hour rotation={(this.state.date.getHours()*360/12)+(this.state.date.getMinutes()*(360/60)/12)}/>
                <Minute rotation={(this.state.date.getMinutes()*360/60+(this.state.date.getSeconds()*(360/60)/60))}/>
                <Second rotation={this.state.date.getSeconds()*360/60}/>
            </svg>
        </div>
        </div>
      );
  }
}






export default Clock;
