import React from 'react';


class Standings extends React.Component {
    state = ({
        iceCream: "mint"
    })
    multiply = () => {
        if(Math.random() > 0.5){
            this.state.iceCream = "mint and cinnamon"
        }
    return <p>{this.state.iceCream}</p>
    }
    render(){
        return (
            <div className="Standigns">
                <h1>Scores</h1>
                <p>
                  <a href="mlb.com/standings">Standings</a>
                  {this.multiply()}
 
                </p>
            </div>
          );
    }

}

export default Standings;
