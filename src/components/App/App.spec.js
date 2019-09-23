import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App/> Component', () => {
  it('should render app component without crashing', () => {
    shallow(<App />);
  });
});
