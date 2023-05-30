import { Store } from './components/Store/Store';
import { Item, List } from './Shop.styled';

export const Shop = ({ stores }) => {
  return (
    <nav>
      <List>
        {stores.map(item => (
          <Item key={item.id}>
            <Store {...item} />
          </Item>
        ))}
      </List>
    </nav>
  );
};
