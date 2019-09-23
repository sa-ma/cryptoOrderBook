import {
  CURRENCY_ERROR,
  CURRENCY_LOADING,
  CURRENCY_SUCCESS
} from '../actions/types/currencyPairTypes';

export const initialState = {
  loading: false,
  currencyPairs: [],
  error: {}
};

export const currencyPairReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENCY_LOADING:
      return {
        ...state,
        loading: payload.loading
      };
    case CURRENCY_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        currencyPairs: payload.data
      };
    case CURRENCY_ERROR:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error
      };
    default:
      return state;
  }
};
