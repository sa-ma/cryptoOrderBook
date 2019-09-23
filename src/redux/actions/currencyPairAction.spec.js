import moxios from 'moxios';
import {
  initialState,
  getCurrencyData,
  getErrorMessage
} from '../../utils/mockData';
import makeMockStore from '../../utils/mockStore';
import * as currencyAction from './currencyPairAction';

const store = makeMockStore(initialState);

describe('Test for Currency Pairs', () => {
  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });
  it('should dispatch FETCH_LOADING and FETCH_SUCCESS actions', async () => {
    const expectedActions = [
      currencyAction.currencyLoading(),
      currencyAction.currencySuccess(getCurrencyData)
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: getCurrencyData });
    });
    await store.dispatch(currencyAction.fetchCurrencyPair());
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
  it('should dispatch FETCH_ERROR actions', async () => {
    const expectedActions = [
      currencyAction.currencyLoading(),
      currencyAction.currencyError(getErrorMessage)
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500, response: getErrorMessage });
    });
    await store.dispatch(currencyAction.fetchCurrencyPair());
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});
