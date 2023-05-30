import { storeNameNormalize } from 'shared/utils/storeNameNormalize';
import { StyledNavLink } from './Store.styled';

export const Store = ({ store_name }) => {
  return (
    <StyledNavLink to={storeNameNormalize(store_name)}>
      <p>{store_name}</p>
    </StyledNavLink>
  );
};
