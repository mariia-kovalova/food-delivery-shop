import { getPrice } from 'shared/utils/getPrice';
import { Code, Item, List, StyledH2 } from './History.styled';

export const History = ({ orders }) => {
  return (
    <>
      <StyledH2>Orders history</StyledH2>
      <List>
        {orders.map(order => (
          <Item key={order.info.id}>
            <Code># {order.info.id}</Code>
            <p>Store: {order.info.store_name}</p>
            <p>Number of items: {order.items.length}</p>
            <p>Total price: {getPrice(order.info.total_price)}</p>
          </Item>
        ))}
      </List>
    </>
  );
};
