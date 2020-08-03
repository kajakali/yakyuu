import React from 'react';


class Standings extends React.Component {
    state = ({
        iceCream: "mint"
    })
    multiply = () => {
        if(Math.random() > 0.5){
            this.setState({iceCream: "mint and cinnamon"})
        }
    return <p>{this.state.iceCream}</p>
    }
    render(){
        return (
            <div className="Standings">
                <h1>Scores</h1>
                <p>
                  <a href="https://mlb.com/standings">Standings</a>
                  {this.multiply()}
 
                </p>
            </div>
          );
    }

}

export default Standings;
