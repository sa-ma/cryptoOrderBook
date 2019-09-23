/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyPair } from '../../redux/actions/currencyPairAction';
import Loader from '../Loader/';

const CurrencyPairs = ({ loading, currencyPairs, fetchCurrencyPair }) => {
  useEffect(() => {
    fetchCurrencyPair();
  }, []);

  const PairList = () =>
    currencyPairs.map(({ name }, index) => <option key={index}>{name}</option>);
  return loading ? (
    <Loader />
  ) : (
    <div className="pair-header">
      <label>Related Pairs</label>
      <select name="pairList">
        <option defaultValue="Choose Pair" disabled>
          Choose Pair
        </option>
        <PairList />
      </select>
    </div>
  );
};

CurrencyPairs.propTypes = {
  loading: PropTypes.bool.isRequired,
  currencyPairs: PropTypes.array.isRequired,
  fetchCurrencyPair: PropTypes.func.isRequired
};

const mapStateToProps = ({ currency }) => ({
  loading: currency.loading,
  currencyPairs: currency.currencyPairs
});

export const CurrencyPairsComponent = CurrencyPairs;

export default connect(
  mapStateToProps,
  { fetchCurrencyPair }
)(CurrencyPairs);
