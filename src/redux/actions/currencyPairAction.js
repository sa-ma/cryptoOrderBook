import axios from 'axios';
import {
  CURRENCY_ERROR,
  CURRENCY_LOADING,
  CURRENCY_SUCCESS
} from './types/currencyPairTypes';

export const currencyLoading = () => ({
  type: CURRENCY_LOADING,
  payload: {
    loading: true
  }
});

export const currencySuccess = (data) => ({
  type: CURRENCY_SUCCESS,
  payload: {
    loading: false,
    data
  }
});

export const currencyError = (error) => ({
  type: CURRENCY_ERROR,
  payload: {
    loading: false,
    error
  }
});

export const fetchCurrencyPair = () => async (dispatch) => {
  dispatch(currencyLoading());
  try {
    const { data } = await axios.get(
      'https://www.bitstamp.net/api/v2/trading-pairs-info/'
    );
    return dispatch(currencySuccess(data));
  } catch (error) {
    return dispatch(currencyError(error.message));
  }
};
