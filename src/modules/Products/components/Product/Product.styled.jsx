import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import { BaseButton } from 'shared/styles/components/BaseButton.styled';

export const Wrap = styled.div`
  padding-top: 51px;
  height: 321px;
`;

export const Info = styled.div`
  position: relative;
  padding: 130px 30px 40px 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  text-align: center;

  border-radius: 22px;
  background: ${({ theme }) => theme.bgCard};
`;

export const Img = styled.img`
  position: absolute;
  top: -51px;
  left: 50%;
  transform: translate(-50%);
  width: 164px;
  height: 164px;
  clip-path: circle(50% at 50% 50%);
`;

export const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 101.34%;
`;

export const Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
`;

export const Container = styled.div`
  position: relative;

  width: 100%;

  & .tooltip {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Btn = styled(BaseButton)`
  padding: 6px 3px;
  width: 100%;

  font-size: 12px;

  border: 1px solid ${({ theme }) => theme.primary};

  color: ${({ isInCart, theme: { bgPrimary, primary } }) =>
    isInCart ? primary : bgPrimary};

  background-color: ${({ isInCart, theme: { bgPrimary, primary } }) =>
    isInCart ? bgPrimary : primary};
`;
