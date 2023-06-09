const min = 10;
const max = 99;

export const getOrderId = () => {
  return `${Date.now()}${Math.floor(Math.random() * (max - min + 1)) + min}`;
};
