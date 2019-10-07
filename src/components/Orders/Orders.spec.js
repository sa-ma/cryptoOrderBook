import React from 'react';
import { mount, shallow } from 'enzyme';
import makeMockStore from '../../utils/mockStore';
import { initialCurrencyState } from '../../utils/mockData';
import { OrdersComponent } from './Orders';

const store = makeMockStore(initialCurrencyState);

describe('<Order/> Component', () => {
  const props = {
    currency: {
      url_symbol: 'ltcusd'
    }
  };
  it('should render the Orders component', () => {
    const component = mount(<OrdersComponent store={store} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should successfully display orders and bids', () => {
    const component = shallow(<OrdersComponent store={store} {...props} />);
    expect(component.find('table')).toHaveLength(2);
  });
});
