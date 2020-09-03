import React from 'react';

class RouletteGun extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      bulletInChamber: 8
    }
  }
  componentDidMount =()=> {

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleButtonClick =()=> {
    this.setState({spinningTheChamber: true});
    setTimeout(Math.ceil(Math.random()*8), 2000);
    this.componentWillMount(spinningTheChamber);
  }
  handleBulletInChamber =()=> {
    this.setState({bulletInChamber: null})
  }
  render(){

  return (
    <div>
      <p></p>
      <button>Pull The Trigger!</button>
    </div>
  )}
 
}

export default RouletteGun;