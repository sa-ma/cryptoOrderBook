import { initialState, currencyPairReducer } from './currencyPairReducer';
import {
  CURRENCY_LOADING,
  CURRENCY_SUCCESS,
  CURRENCY_ERROR
} from '../actions/types/currencyPairTypes';

describe('Tests for Currency Pair Reducer', () => {
  it('should return the initial state', () => {
    expect(currencyPairReducer(undefined, {})).toEqual(initialState);
  });
  it('should return loading when currency is loading', () => {
    const loadDispatch = {
      type: CURRENCY_LOADING,
      payload: {
        loading: true,
        currencyPairs: []
      }
    };
    const loadState = {
      loading: true
    };
    expect(currencyPairReducer({}, loadDispatch)).toEqual(loadState);
  });
  it('should return success when currency is done loading', () => {
    const successDispatch = {
      type: CURRENCY_SUCCESS,
      payload: {
        loading: false,
        data: []
      }
    };
    const successState = {
      loading: false,
      currencyPairs: []
    };
    expect(currencyPairReducer({}, successDispatch)).toEqual(successState);
  });
  it('should return error if there is a problem getting currency', () => {
    const errorState = {
      loading: false,
      error: ''
    };

    const errorDispatch = {
      type: CURRENCY_ERROR,
      payload: errorState
    };
    expect(currencyPairReducer({}, errorDispatch)).toEqual(errorState);
  });
});
