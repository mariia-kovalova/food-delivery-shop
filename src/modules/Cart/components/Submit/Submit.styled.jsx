import styled from '@emotion/styled';
import { desktop } from 'shared/constants/deviceSizes';
import { BaseButton } from 'shared/styles/components/BaseButton.styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px;
  width: 100%;

  @media (min-width: ${desktop}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Price = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Total = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
`;

export const Number = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
`;

export const SubmitBtn = styled(BaseButton)`
  padding: 8px 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
