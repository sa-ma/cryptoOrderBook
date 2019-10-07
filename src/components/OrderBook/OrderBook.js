import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrencyPairs from '../CurrencyPairs/CurrencyPairs';
import Orders from '../Orders';
import Loader from '../Loader';

const OrderBook = ({ loading, error }) => {
  return (
    <>
      <CurrencyPairs />
      {loading ? (
        <Loader />
      ) : error === '' ? (
        <Orders />
      ) : (
        <div className="error">Error Loading data. Refresh the page</div>
      )}
    </>
  );
};

OrderBook.propType = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};
const mapStateToProps = ({ currencyPairs }) => ({
  loading: currencyPairs.loading,
  error: currencyPairs.error
});
export const OrderBookComponent = OrderBook;
export default connect(mapStateToProps)(OrderBook);
