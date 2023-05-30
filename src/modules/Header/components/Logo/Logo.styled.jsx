import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { tablet } from 'shared/constants/deviceSizes';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.primary};
  height: 28px;
  width: 28px;

  transition: transform 250ms ${({ theme }) => theme.cubic},
    fill 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.cardTextAccent};
    transform: scale(1.1);
  }

  @media (min-width: ${tablet}) {
    height: 36px;
    width: 36px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0px;

  color: transparent;
  background-color: transparent;
  border: none;
`;
