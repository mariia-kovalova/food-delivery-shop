export const getCleanItems = items =>
  items.map(({ name, price, amount }) => ({ name, price, amount }));
