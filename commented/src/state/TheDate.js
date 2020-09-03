import React from 'react';

class TheDate extends React.Component {
  //x constructor() { } --> ReferenceError: this hasn't been initialized - super() hasn't been called
  constructor(props) {
    // console.log('constructor');
    super(props)
    //initialize elements
    this.state = { 
      count: 0,
      datetime: new Date(),
      // dateUTC: new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
    };
    //fixes TypeError: Cannot read property 'state' of undefined
    // this.handleButtonClick = this.handleButtonClick.bind(this);
    // this.state = {
    //   foo: 'foo',
    //   hello: 'Hello, world!',
    //   list: [1,2,3],
    //   obj: { nested: 'object', yes: true}
    // }
  }
  componentDidMount() {
    // console.log('component added');

    this.interval = setInterval(() => {
      // console.log('set interval');
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    // console.log('component removed')
    clearInterval(this.interval)
  }
  handleButtonClick =()=> {
    const newCount = this.state.count + 1;
    this.setState({
      count : newCount
    })
    //supposed to get TypeError, works fine because we're using an arrow function
    console.log(this.state.count);
  }
  render() {
    // console.log('render');
    // console.log(this.state.dateUTC(event.toLocaleString('koKR', { timeZone: 'UTC'})));
    return (
      <>
      <div>
        <p>The current count: {this.state.count}</p>
        {/* place ()=> in onClick as alternative to .bind(this) ref line 15 */}
        <button onClick={ this.handleButtonClick}>Add 1</button>
      </div>
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


/*
Ref: 
https://github.com/facebook/create-react-app/issues/2534
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

"CRUD"? Life Cycle methods:
1. constructor
  initialize state
2. render
  update DOM
3. componentDidMount
    added to DOM
    subject to change: ie: conditional rendering, where props change the component from rendered to not rendered
4. componentWillUnmount
  be removed from DOM
Q: why would you want to change state in the DevTools?
A: for debugging
const TheDate = () => {
useRef()
  return (
    <div />
  )
}
 */