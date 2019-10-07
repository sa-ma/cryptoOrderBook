export const subscribeAction = (action, channel) => ({
  event: `bts:${action}`,
  data: {
    channel: `order_book_${channel}`
  }
});

export const getCurrency = (pair) => {
  return pair.toUpperCase().match(/.{1,3}/g);
};
