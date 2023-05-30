import React from 'react';
import { Code, Item, List, StyledH2 } from './History.styled';

export const History = ({ items }) => {
  return (
    <>
      <StyledH2>Orders history</StyledH2>
      <List>
        {items.map(item => (
          <Item key={item.info.id}>
            <Code># {item.info.id}</Code>
            <p>Store: {item.info.store_name}</p>
            <p>Number of items: {item.items.length}</p>
            <p>Total price: {item.info.total_price} $</p>
          </Item>
        ))}
      </List>
    </>
  );
};
