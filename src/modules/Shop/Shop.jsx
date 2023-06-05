import { Store } from './components/Store/Store';
import { Item, List } from './Shop.styled';

export const Shop = ({ stores }) => {
  return (
    <nav>
      <List>
        {stores.map(store => (
          <Item key={store.id}>
            <Store {...store} />
          </Item>
        ))}
      </List>
    </nav>
  );
};
