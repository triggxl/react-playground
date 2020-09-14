import React from 'react';

class Accordion extends React.Component {
  state = {
    // no indexes shown by default using -1 for initial state
    selectedSectionIndex : -1
  }
  handleButtonClick (index) {
    //handler modifying state of selected section
    this.setState({selectedSectionIndex: index});
  }
  //JSX
  render(){
    // console.log(this.props.sections);
    //HTML
    return (
      <>
        <h3>Accordion App</h3>
      <ul>
        {this.props.sections.map((section, index) =>{
          return (
             <li key={index}>
               <button onClick={()=> {this.handleButtonClick(index)}}>{section.title}</button>
               { 
                this.state.selectedSectionIndex === index ?  
                <p>{section.content}</p>
                : null
              } 
             </li>
          )
        })
        }
      </ul>
    </>
    )
  }
}

export default Accordion;

//create an element...console.log (baby steps)

/*
Example ternary in react
 this.state.lastSectionClicked === index ?  
  (<div key={index*2}>
    <li key={index}>
    <button onClick={()=> {this.handleButtonClick(index)}}>{section.title}</button>
    <p key={section.title+index}>{section.content}</p>
    </li>
  </div>): null
*/