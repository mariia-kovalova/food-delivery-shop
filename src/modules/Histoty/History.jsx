import { useMemo, useState } from 'react';
import { getPrice } from 'shared/utils/getPrice';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Info } from 'shared/styles/components/Info';
import { Code, Item, List, StyledH2 } from './History.styled';

export const History = ({ orders }) => {
  const [code, setCode] = useState('');

  const filteredOrders = useMemo(
    () =>
      code
        ? orders.filter(item => item.info.id.toString().includes(code))
        : orders,
    [code, orders]
  );

  const showNoResults = filteredOrders.length === 0;

  return (
    <>
      <SearchBar setCode={setCode} />
      <StyledH2>Orders history</StyledH2>
      {!showNoResults && (
        <List>
          {orders.map(order => (
            <Item key={order.info.id}>
              <Code># {order.info.id}</Code>
              <p>Store: {order.info.store_name}</p>
              <p>Total price: {getPrice(order.info.total_price)}</p>
            </Item>
          ))}
        </List>
      )}
      {showNoResults && <Info>Order #{code} was not found</Info>}
    </>
  );
};
