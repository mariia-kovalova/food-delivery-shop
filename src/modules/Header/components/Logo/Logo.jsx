import { home } from 'shared/constants/routes';
import { StyledNavLink, Svg } from './Logo.styled';
import sprite from 'shared/icons/sprite.svg';

export const Logo = () => {
  return (
    <StyledNavLink to={home}>
      <Svg>
        <use href={`${sprite}#icon-utensils-solid`} />
      </Svg>
    </StyledNavLink>
  );
};
