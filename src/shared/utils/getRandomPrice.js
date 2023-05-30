const min = 100;
const max = 200;

export const getRandomPrice = () =>
  Math.floor(Math.random() * (max - min + 1)) + min;
