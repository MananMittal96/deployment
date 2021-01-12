import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Navbar from './components/navbar';

configure({ adapter: new Adapter() });

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Navbar />);
  
    expect(component).toMatchSnapshot();
  });
});