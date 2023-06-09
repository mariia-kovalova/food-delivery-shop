import { useCart } from 'hooks/useCart';
import { CartItem } from '../CartItem/CartItem';
import { List } from './CartList.styled';

export const CartList = () => {
  const { items } = useCart();

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
