import { SUBSCRIPTION_SUCCESS } from '../actions/types/currencySubscriptionTypes';

const initialState = {
  singleCurrency: {}
};

export const currencyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        singleCurrency: payload.data
      };
    default:
      return state;
  }
};
