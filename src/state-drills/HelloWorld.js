import React from 'react';

class HelloWorld extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    greeting: 'Who',
  }
  }
  greetingWho =()=> {
    this.setState({greeting : 'Who'});
  }
  greetingFriend =()=> {
    this.setState({greeting : 'Friend'});
  }
  greetingReact =()=> {
    this.setState({greeting: 'React'});
  }
  render() {
    // const who = 'Who';
    // const friend = 'Friend';
    // const react = 'React';
    // const [ who, friend, react ] = useState([]);
   return (
    <div>
      <p>Hello {this.state.greeting}</p>
      <button onClick={this.greetingWho}>Who</button>
      <button onClick={this.greetingFriend}>Friend</button>
      <button onClick={this.greetingReact}>React</button>
    </div>
   )
  }
}

export default HelloWorld;