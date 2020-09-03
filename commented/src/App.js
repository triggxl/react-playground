import React, {Component} from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './Counter';

//"../"" to access from folder above/one folder up
const FirstToolTip = props => (
  <Tooltip color="hotpink"message='tooltip message'>
    ipsum
  </Tooltip>
)
const SecondToolTip = props => (
  <Tooltip color='#126BCC' message='another tooltip message'>
  ipsum
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter count={123}/>
      <AppNotification />
      <FirstToolTip />
      <Split className="left" flexBasis={2}>
      {/* children props = content inside of component ('Split') instances*/}
      Now This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <Tooltip message='one more Tooltip'>
        Necessitatibus?
      </Tooltip>
      {/* instance of Split */}
      <Split className="right" flexBasis={4}>
      Now This is the content for the right `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <SecondToolTip />
    </main>
  );
}

class AppNotification extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <div>Hello!</div>
      </div>
    );
  }
}

export default App;

/*
export {
  About,
  Contact,
}
1. Create composition folder and Tooltip file 
2. Add sections inside Tooltip with props
3. Style Tooltip components
4. Import CSS file into Tooltip && export to App.js
5. Added color to Tooltips using inline styling
Default Props:

create component
import component to use or export for use

In this checkpoint we've created our first custom component, Split, that's used for dividing a page up into 
sections. This gave us a good opportunity to practice with props.children and the import/export syntax. 
We coordinated a custom CSS file and styles with our component, keeping a clear separation of concerns.
mkdir --> new folder
touch --> new file
rm -r --> remove folder
./ root directory

*/