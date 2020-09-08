import React from 'react';

class Tabs extends React.Component {
  // to fix TypeError: Cannot read property 'map' of undefined
  static defaultProps = {tabs: []};
  state = {
    currentTabIndex : 0
  };
  handleButtonClick = index => {
    //to modify state
    this.setState({currentTabIndex: index})
  }
  // syntax of classes, no const or let inside an object; using the this keyword is pertinent to classes
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      // add ()=> to execute on event and not on actual load of page
      <button key={index} onClick={()=> this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }
  renderContent() {
    return (
      <div className='content'>
        {this.state.currentTabIndex.content};
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {/* explain how line 34 reads */}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    )
  }
}

export default Tabs;