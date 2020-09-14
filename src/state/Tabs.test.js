import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './Tabs';

configure({ adapter: new Adapter() });

describe(`Tabs Component`, () => {
  const TabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];
  //smoke
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  //snapshot of tabs
  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('renders the first tab by default', ()=> {
    const wrapper = shallow(<Tabs tabs={TabsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('closes the first tab and opens any clicked tab', ()=>{
    const wrapper = shallow(<Tabs tabs={TabsProp} />)
    wrapper.find('button');
    console.log('>>> WRAPPER <<<')
    console.log(wrapper.debug())
    console.log('>>> FIND(BUTTON) <<<')
    console.log(wrapper.find('button').at(1).simulate('click'))
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})

/*
1. Made test file
2. Tabs component with empty div initially
3. import Tabs component to App && plugged in
prop, array of objects using dummy data
4. Rendering buttons in Tabs component
mapping over tabs array, making an array of buttons
using name of each object for each button's instance
5. set default props to fix Type Error: Cannot read 
property of undefined
6. Render first tab by default using static property
7. used discreet math to fix Error: Cannot read property of undefined
  using this.props.tabs.length && (Tabs.js line 18)
8. Create snapshot
  import renderer copying tabsProp from App.js to test file and snapshot
9. Added a click handler on the button
  updated snapshot by typing 'u' in terminal to fix error from having 1+ props on an element
10. Set intial set of buttons + added click event handler 
  (renderDOM is used between index.js and app.js)
*/