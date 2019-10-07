import React from 'react';
import { mount } from 'enzyme';
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
    const component = mount(
      <CurrencyPairsComponent store={store} {...props} />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render a list of currencies after loading successfully', () => {
    const props = {
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
  it('should call onChange for currency change', () => {
    const props = {
      currencyPairs: [getCurrencyData],
      fetchCurrencyPair: jest.fn(),
      currencySubscriptionAction: jest.fn()
    };
    const handleChange = jest.fn();
    const component = mount(
      <CurrencyPairsComponent
        onChange={handleChange}
        store={store}
        {...props}
      />
    );
    const currencyList = component.find('select');
    currencyList.simulate('change', {
      target: {
        name: 'Choose Pair',
        value: 'Choose Pair'
      }
    });
    expect(currencyList).toHaveLength(1);
    expect(currencyList.html()).toMatch('Choose Pair');
  });
});
