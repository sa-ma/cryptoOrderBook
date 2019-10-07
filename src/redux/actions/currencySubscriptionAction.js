import { SUBSCRIPTION_SUCCESS } from './types/currencySubscriptionTypes';

export const currencySuccess = (data) => ({
  type: SUBSCRIPTION_SUCCESS,
  payload: {
    loading: false,
    data
  }
});

export const currencySubscriptionAction = (data) => (dispatch) => {
  return dispatch(currencySuccess(data));
};
