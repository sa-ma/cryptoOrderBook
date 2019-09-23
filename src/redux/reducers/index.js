import { combineReducers } from 'redux';
import { currencyPairReducer } from './currencyPairReducer';

export default combineReducers({
  currency: currencyPairReducer
});
