import { Item, List } from './Products.styled';
import { Product } from './components/Product/Product';

export const Products = ({ products }) => {
  return (
    <List>
      {products.map(product => (
        <Item key={product.id}>
          <Product product={product} />
        </Item>
      ))}
    </List>
  );
};
