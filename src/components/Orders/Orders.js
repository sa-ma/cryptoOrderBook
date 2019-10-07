import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { subscribeAction, getCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';
import './Orders.css';

const Orders = ({ currency }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);
  let { url_symbol } = currency;
  url_symbol = url_symbol || 'btcusd';

  const currencyArray = getCurrency(url_symbol) || ['BTC', 'USD'];

  useEffect(() => {
    const subscribe = subscribeAction('subscribe', url_symbol);
    const unsubscribe = subscribeAction('unsubscribe', url_symbol);
    const ws = new WebSocket('wss://ws.bitstamp.net');

    const initWebsocket = () => {
      ws.onopen = () => {
        ws.send(JSON.stringify(subscribe));
      };
      ws.onmessage = (event) => {
        const response = JSON.parse(event.data);
        switch (response.event) {
          case 'data':
            setOrders(response.data);
            break;
          case 'bts:request_reconnect':
            initWebsocket();
            break;
          default:
            break;
        }
      };
      ws.onerror = () => {
        setError(true);
      };
      ws.onclose = () => {
        ws.send(JSON.stringify(unsubscribe));
        ws.close();
      };
    };

    initWebsocket();

    return () => {
      ws.close();
    };
  }, [url_symbol]);

  const { bids, asks } = orders;
  const orderRows = (arr) =>
    arr &&
    arr.map((el, index) => (
      <tr key={index}>
        <td> {el[1]} </td>
        <td> {el[0]} </td>
      </tr>
    ));
  const orderHead = (title) => (
    <thead>
      <tr>
        <th colSpan="2">{title}</th>
      </tr>
      <tr>
        <th>Amount ({currencyArray[0]})</th>
        <th>Price ({currencyArray[1]})</th>
      </tr>
    </thead>
  );
  return (
    <div className="order-container">
      {error ? (
        <div className="error"> Error Loading Data</div>
      ) : (
        <>
          {url_symbol ? (
            <div>
              <table>
                {orderHead('Bids')}
                <tbody>{orderRows(bids)}</tbody>
              </table>
            </div>
          ) : (
            <div>Waiting for data ....</div>
          )}
          {url_symbol ? (
            <div>
              <table>
                {orderHead('Asks')}
                <tbody>{orderRows(asks)}</tbody>
              </table>
            </div>
          ) : (
            <div>Waiting for data ....</div>
          )}
        </>
      )}
    </div>
  );
};

Orders.propType = {
  currency: PropTypes.object.isRequired
};
export const OrdersComponent = Orders;
const mapStateToProps = ({ currency }) => ({
  currency: currency.singleCurrency
});
export default connect(mapStateToProps)(Orders);
