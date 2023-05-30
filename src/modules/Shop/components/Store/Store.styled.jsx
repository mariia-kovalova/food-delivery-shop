import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { tablet } from 'shared/constants/deviceSizes';

export const StyledNavLink = styled(NavLink)`
  display: block;

  padding: 16px;

  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.primaryTransparet};
  border-radius: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 101.34%;

  @media (min-width: ${tablet}) {
    font-size: 20px;
    padding: 20px;
  }

  transition: transform 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  &.active {
    color: ${({ theme }) => theme.bgPrimary};
    background-color: ${({ theme }) => theme.primary};
  }

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.cardTextHover};
  }
`;
