import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Dashboard from '../components/dashboard';

configure({ adapter: new Adapter() });

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Dashboard />);
  
    expect(component).toMatchSnapshot();
  });
});