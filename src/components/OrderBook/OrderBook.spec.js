import React from 'react';
import { mount, shallow } from 'enzyme';
import makeMockStore from '../../utils/mockStore';
import { Provider } from 'react-redux';
import { initialState, getCurrencyData } from '../../utils/mockData';
import { OrderBookComponent } from './OrderBook';

const store = makeMockStore({});
describe('<OrderBook/> test', () => {
  it('should render component without crashing', () => {
    const component = shallow(
      <OrderBookComponent store={store} {...initialState} />
    );
    expect(component).toMatchSnapshot();
  });
  // it('should render a loading message when currency is loading', () => {
  //   const props = {
  //     ...initialState,
  //     loading: true
  //   };
  //   const component = mount(<OrderBookComponent store={store} {...props} />);
  //   console.log(component.debug());
  //   expect(component.find('div').hasClass('loader')).toBe(true);
  // });
  // it('should render error message if no content', () => {
  //   const props = {
  //     loading: false,
  //     error: 'error'
  //   };
  //   const component = mount(<OrderBookComponent store={store} {...props} />);
  //   expect(component.find('div').hasClass('error')).toBe(true);
  // });
  // it('should render a list of currencies after loading successfully', () => {
  //   const props = {
  //     currencyPairs: [getCurrencyData],
  //     fetchCurrencyPair: jest.fn()
  //   };
  //   const component = mount(
  //     <OrderBookComponent store={store} {...props} />
  //   );
  //   expect(component.find('div').hasClass('pair-header')).toBe(true);
  //   expect(component.find('select')).toHaveLength(1);
  //   expect(component.find('label')).toHaveLength(1);
  // });
});
