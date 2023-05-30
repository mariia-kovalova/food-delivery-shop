import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import { headerFooterHeight } from 'shared/constants/headerFooterHeight';

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
`;

export const Main = styled.main`
  min-height: calc(100vh - ${headerFooterHeight.mobile});

  @media screen and (min-width: ${tablet}) {
    min-height: calc(100vh - ${headerFooterHeight.tabet});
  }
  @media screen and (min-width: ${desktop}) {
    min-height: calc(100vh - ${headerFooterHeight.desktop});
  }
`;
