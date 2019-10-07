import { SUBSCRIPTION_SUCCESS } from '../actions/types/currencySubscriptionTypes';
import { currencyReducer } from './currencySubscriptionReducer';

describe('Tests for Currency Subscription Reducer', () => {
  it('should return success when currency is done loading', () => {
    const successDispatch = {
      type: SUBSCRIPTION_SUCCESS,
      payload: {
        data: {}
      }
    };
    const successState = {
      singleCurrency: {}
    };
    expect(currencyReducer({}, successDispatch)).toEqual(successState);
  });
});
