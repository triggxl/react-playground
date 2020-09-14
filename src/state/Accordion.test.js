import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from '../state-drills/Accordion';

configure({ adapter: new Adapter() });

describe('Accordion component', ()=>{
  
  const SectionsProp = [
      {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
      },
      {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      },
  ]
  it('testing Accordion application', ()=> {
    const liSmokeTest = document.createElement('<li>');
    ReactDOM.render(<Accordion />, liSmokeTest);
    ReactDOM.unmountComponentAtNode('<li>', liSmokeTest);
  })
  it('the component renders an empty li when the sections prop is not supplied', ()=>{
    const li = shallow(<Accordion sections={SectionsProp}/>);
    expect(toJson(li)).toMatchSnapshot();
  })
  it('the component renders no sections as active by default', ()=> {
    const noActiveByDefault = shallow(<Accordion sections={SectionsProp}/>);
    expect(toJson(noActiveByDefault)).toMatchSnapshot();
  })
  it('the component opens a clicked section', ()=>{
    const clickedSection = shallow(<Accordion sections={SectionsProp}/>);
    expect(toJson(clickedSection)).toMatchSnapshot();
  })
  it('the component only opens the last section when multiple sections have been clicked', ()=>{
    const openLastSectionOnly = shallow(<Accordion sections={SectionsProp}/>);
    expect(toJson(openLastSectionOnly)).toMatchSnapshot();
  })
})