import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import OrderBook from '../OrderBook';
import '../../assets/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );
};

export default App;
