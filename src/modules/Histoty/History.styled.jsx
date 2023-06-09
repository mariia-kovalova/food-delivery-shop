import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const StyledH2 = styled.h2`
  text-align: center;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 10px;

  padding: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 101.34%;

  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.primaryTransparet};
  border-radius: 10px;

  @media (min-width: ${tablet}) {
    padding: 20px 40px;
    font-size: 14px;
  }

  @media (min-width: ${desktop}) {
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    font-size: 16px;
  }
`;

export const Code = styled.p`
  font-weight: 900;
  font-size: 18px;
`;
