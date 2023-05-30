import { List } from './Cart.styled';
import { CartItem } from './components/CartItem/CartItem';

export const Cart = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}>
          <CartItem item={item} />
        </li>
      ))}
    </List>
  );
};
