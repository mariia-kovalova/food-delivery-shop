import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const List = styled.ul`
  display: flex;
  gap: 20px;

  padding: 20px;

  @media (min-width: ${desktop}) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  min-width: 150px;

  @media (min-width: ${tablet}) {
    min-width: 250px;
  }

  @media (min-width: ${desktop}) {
    min-width: 100%;
  }
`;
