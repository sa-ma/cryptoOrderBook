import { combineReducers } from 'redux';
import { currencyPairReducer } from './currencyPairReducer';
import { currencyReducer } from './currencySubscriptionReducer';

export default combineReducers({
  currencyPairs: currencyPairReducer,
  currency: currencyReducer
});
