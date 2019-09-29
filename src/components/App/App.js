import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CurrencyPairs from '../CurrencyPairs/CurrencyPairs';
import '../../assets/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <CurrencyPairs />
    </Provider>
  );
};

export default App;
