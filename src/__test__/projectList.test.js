import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ProjectList from '../components/projectList';

configure({ adapter: new Adapter() });

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ProjectList />);
  
    expect(component).toMatchSnapshot();
  });
});