import React from 'react';
import ReactDOM from 'react-dom';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from "enzyme";

configure({ adapter: new Adapter() });


import ProblemItem from './ProblemItem'

it('renders without crashing', () => {
  let props
  const div = document.createElement('div');
  ReactDOM.render(<ProblemItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
