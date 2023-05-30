import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  padding: 20px;
`;

export const Item = styled.li`
  flex-basis: 100%;

  @media (min-width: ${tablet}) {
    flex-basis: calc((100% - 20px * 2) / 3);
  }

  @media (min-width: ${desktop}) {
    flex-basis: calc((100% - 20px * 3) / 4);
  }
`;
