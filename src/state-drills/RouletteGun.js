import React from 'react';

class RouletteGun extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      spinChamber: '',
      bang: '',
      chamber: null,
      spinningTheChamber: false,
      bulletInChamber: 8
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleButtonClick =()=> {
    this.setState({
      spinningTheChamber: true, 
      spinChamber: 'spinning the chamber and pulling the trigger! ....', 
      bang: this.state.chamber === this.state.bulletInChamber ? 'BANG!!' : "You're Safe!"
    });
    setTimeout(()=> {
      const randomNum = Math.ceil(Math.random()*8);
      this.setState({
        chamber: randomNum,
        spinningTheChamber: false,
        spinChamber: null
      })
    },2000); 
  }
  handleBulletInChamber =()=> {
    this.setState({bulletInChamber: null})
  }
  render(){
    return (
    <div>
      <h3>The Roulette Button</h3>
      <p>{this.state.spinTheChamber}</p>
      <p>{this.state.bang}</p>
      <button onClick={this.handleButtonClick}>Pull The Trigger!</button>
    </div>
  )}
 
}

export default RouletteGun;