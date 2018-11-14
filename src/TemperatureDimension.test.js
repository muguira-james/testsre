import React from 'react';
import ReactDOM from 'react-dom';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from "enzyme";

configure({ adapter: new Adapter() });


import TemperatureDimension from './TemperatureDimension'

it('renders without crashing', () => {
  let props
  const div = document.createElement('div');
  ReactDOM.render(<TemperatureDimension />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a div', () => {
    let m = mount(<TemperatureDimension />)
    expect(m.length).toBeGreaterThan(0)
})

it('it renders an input', ()=> {
    let m = mount(<TemperatureDimension />)
    expect(m.find('input').length).toBe(1)
})

it('it renders a select', ()=> {
    let m = mount(<TemperatureDimension />)
    expect(m.find('select').length).toBe(1)
})

it('renders with props', () => {
    let props = {
        inputTemp: 99.9,
        dimension: "Celsius"
    }
    let m = mount(<TemperatureDimension {...props}/>)
    expect(m.length).toBeGreaterThan(0)
})

it('renders the right state with props', () => {
    let temp = 109.9
    let props = {
        inputTemp: 109.9,
        dimension: "Celsius"
    }
    let m = mount(<TemperatureDimension {...props}/>)
    console.log("props--->", m.props())
    expect(m.props().inputTemp).toBe(temp)
    expect(m.props().dimension).toBe("Celsius")
})