import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const StyledFooter = styled.footer``;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 62px;

  border-top: 1px solid ${({ theme }) => theme.textPrimary};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    font-size: 16px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 18px;
  }

  & a {
    color: inherit;
  }
`;
