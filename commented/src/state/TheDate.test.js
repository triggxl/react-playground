import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TheDate from './TheDate'

describe(`TheDate Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it.skip('renders the UI as expected', () => {
    expect(
      renderer.create(<TheDate />).toJSON()
    ).toMatchSnapshot()
  })
})

/*
The Life Cycle Methods in React:
constructor = Enter the restaurant and ask for the buffet
render = Collect food from the buffet
The DOM is updated = Eat the food
This isn't a life-cycle method, but it is part of the life-cycle
componentDidMount = Ask for condiments, tap water, more cutlery
componentWillUnmount = Pay the bill and leave
*/