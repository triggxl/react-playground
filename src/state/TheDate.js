import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0,
      datetime: new Date(),
    };
  }
  componentDidMount() {

    this.interval = setInterval(() => {
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleButtonClick =()=> {
    const newCount = this.state.count + 1;
    this.setState({
      count : newCount
    })
    console.log(this.state.count);
  }
  render() {
    return (
      <>
      <div>
       <h3>Counter Button</h3>
        <p>The current count: {this.state.count}</p>
        <button onClick={ this.handleButtonClick}>Add 1</button>
      </div>
      <h3>The Date & Current Time: (EST)</h3>
      <div>{ this.state.datetime.toLocaleString() }</div>
      <div>
        {this.state.hello}
       {/* NOT WORKING use array iteration method to access entire state.obj */}
         {/* {this.state.obj.yes} */}
       </div> 
      </>
    )
  }
}

export default TheDate;


class myClass extends React.Component {

}