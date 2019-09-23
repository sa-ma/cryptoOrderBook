export const initialState = {
  loading: false,
  currencyPairs: [],
  error: {}
};

export const getCurrencyData = {
  data: [
    {
      base_decimals: 8,
      minimum_order: '25.0 USD',
      name: 'LTC/USD',
      counter_decimals: 2,
      trading: 'Enabled',
      url_symbol: 'ltcusd',
      description: 'Litecoin / U.S. dollar'
    }
  ]
};
export const getErrorMessage = 'Request failed with status code 500';
