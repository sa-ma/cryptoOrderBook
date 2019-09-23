import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('<Loader/> Component', () => {
  it('should render app component without crashing', () => {
    const component = shallow(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
