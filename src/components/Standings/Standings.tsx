import React from 'react';


class Standings extends React.Component {
    state = ({
        iceCream: "mint"
    })
    multiply = () => {
        if(Math.random() > 0.6){
            this.setState({iceCream: "mint and cinnamon"})
        }
        else if(Math.random() < 0.5){
            this.setState({iceCream: "ginger and mango"})
        }
        else{
            this.setState({iceCream: "the unlikely combination of tea over rice"})
        }
    }
    render(){
        return (
            <div className="Standings">
                <h1>Scores</h1>
                <p>
                  <a href="https://mlb.com/standings">Standings</a>
                  <button onClick={this.multiply}>Randomly change ice cream flavor</button>
                  {this.state.iceCream}

 
                </p>
            </div>
          );
    }

}

export default Standings;
