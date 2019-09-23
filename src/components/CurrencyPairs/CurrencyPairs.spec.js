import React from 'react';
import { mount, shallow } from 'enzyme';
import makeMockStore from '../../utils/mockStore';
import { initialState, getCurrencyData } from '../../utils/mockData';
import { CurrencyPairsComponent } from './CurrencyPairs';

const store = makeMockStore(initialState);

describe('<CurrencyPair/> test', () => {
  it('should render component without crashing', () => {
    const props = {
      ...initialState,
      fetchCurrencyPair: jest.fn()
    };
    const component = shallow(
      <CurrencyPairsComponent store={store} {...props} />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render a loading message when currency is loading', () => {
    const props = {
      loading: true,
      currencyPairs: [],
      fetchCurrencyPair: jest.fn()
    };
    const component = mount(
      <CurrencyPairsComponent store={store} {...props} />
    );
    expect(component.find('div').hasClass('loader')).toBe(true);
  });
  it('should render a list of currencies after loading successfully', () => {
    const props = {
      loading: false,
      currencyPairs: [getCurrencyData],
      fetchCurrencyPair: jest.fn()
    };
    const component = mount(
      <CurrencyPairsComponent store={store} {...props} />
    );
    expect(component.find('div').hasClass('pair-header')).toBe(true);
    expect(component.find('select')).toHaveLength(1);
    expect(component.find('label')).toHaveLength(1);
  });
});
