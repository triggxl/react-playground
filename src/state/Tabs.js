import React from 'react';
// state set properly? handling state?
class Tabs extends React.Component {
  // default props; set to fix TypeError: Cannot read property 'map' of undefined || write ternary that checks that array > 0
  static defaultProps = {tabs: []};
  // initial state
  state = {
    currentTabIndex : 0
  };
  handleButtonClick = index => {
    //to modify state
    this.setState({currentTabIndex: index})
    // console.log({currentTabIndex: index})
  }
  // syntax of classes, no const or let inside an object; using the this keyword is pertinent to classes
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      // add ()=> to execute on event and not on actual load of page; updating tab index in state to current index
      <button key={index} onClick={()=> this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }
  //content that's displayed; renderContent = react method
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex];
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
  render() {
    return (
      <div>
        <h3>Tabs App</h3>
        {this.renderButtons()}
        {/* !! something other than 0 for the length; "display only if tabs has something in it" */}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    )
  }
}

export default Tabs;

//Feeback: being clear on your variable names; knowing what data types you're working with and how to use them;
