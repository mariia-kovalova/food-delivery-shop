const min = 10000000;
const max = 99999999;

export const getOrderId = () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
