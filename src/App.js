import React, {Component} from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './Counter';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';


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

const TabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Tabs tabs={TabsProp}/>
        <RouletteGun />
        <HelloWorld />
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

