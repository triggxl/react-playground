import React from 'react';
import './Tooltip.css';

// create component
const Tooltip = props => {
  return(
    <span className='Tooltip'>
      <span className='Tooltip-content'
      // inline colors give more control to the parent component
      style= {{ color: props.color }}>
        {props.children}
      </span>
      <div className='Tooltip-message'>
        {props.message}
      </div>
    </span>
  )
}

//default prop/class component
//access props by using this.props
class TooltipClass extends React.Component {
  static defaultProps = {
    color: '#01A800'
  };
  render() {
    // info here defines what component looks like
    // console.log('Using a class component!');
    // console.log(this.props);
    return (
      <span className='Tooltip'>
        <span
          className='Tooltip-content'
          style={{ color: this.props.color }}
        >
          {this.props.children}
        </span>
        <div className='Tooltip-message'>
          {this.props.message}
        </div>
      </span>
    )
  }
}

export default TooltipClass;