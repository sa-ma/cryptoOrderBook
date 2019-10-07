import moxios from 'moxios';
import { initialCurrencyState, getCurrencyData } from '../../utils/mockData';
import makeMockStore from '../../utils/mockStore';
import {
  currencySuccess,
  currencySubscriptionAction
} from './currencySubscriptionAction';

const store = makeMockStore(initialCurrencyState);

describe('Test for currency subscription', () => {
  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });
  it('should dispatch CURRENCY_SUCCESS action', async () => {
    const expectedActions = [currencySuccess(getCurrencyData[0])];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: getCurrencyData[0] });
    });
    await store.dispatch(currencySubscriptionAction());
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});
