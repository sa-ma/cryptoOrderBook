import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyPair } from '../../redux/actions/currencyPairAction';
import { currencySubscriptionAction } from '../../redux/actions/currencySubscriptionAction';
import './CurrencyPairs.css';

const CurrencyPairs = ({
  currencyPairs,
  fetchCurrencyPair,
  currencySubscriptionAction
}) => {
  useEffect(() => {
    fetchCurrencyPair();
  }, [fetchCurrencyPair]);

  const handleChange = (event) => {
    const index = event.target.selectedIndex - 1;
    const singleCurrency = currencyPairs[index];
    currencySubscriptionAction(singleCurrency);
  };
  const PairList = () =>
    currencyPairs.map(({ name }, index) => (
      <option key={index} name={index}>
        {name}
      </option>
    ));

  return (
    <div className="pair-header">
      <label>Related Pairs</label>
      <select
        name="pairList"
        defaultValue="Choose Pair"
        onChange={handleChange}
      >
        <option value="Choose Pair" disabled>
          Choose Pair
        </option>
        <PairList />
      </select>
    </div>
  );
};

CurrencyPairs.propTypes = {
  currencyPairs: PropTypes.array.isRequired,
  fetchCurrencyPair: PropTypes.func.isRequired,
  currencySubscriptionAction: PropTypes.func
};

const mapStateToProps = ({ currencyPairs }) => ({
  currencyPairs: currencyPairs.currencyPairs
});

export const CurrencyPairsComponent = CurrencyPairs;

export default connect(
  mapStateToProps,
  { fetchCurrencyPair, currencySubscriptionAction }
)(CurrencyPairs);
