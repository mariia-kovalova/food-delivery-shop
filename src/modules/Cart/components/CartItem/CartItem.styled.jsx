import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  padding: 20px 20px 20px 51px;
  height: 102px;

  border-radius: 22px;
  background: ${({ theme }) => theme.bgCard};

  & .amount {
    position: absolute;
    bottom: 7%;
    right: 3%;
  }
`;

export const Info = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;

  padding-left: 51px;
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: -35px;
  transform: translate(0, -50%);

  width: 70px;
  height: 70px;
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

export const Btn = styled.button`
  padding: 0px;

  color: transparent;
  background-color: transparent;
  border: none;
  width: fit-content;
  height: fit-content;
`;

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.disabled};
  height: 18px;
  width: 18px;

  transition: transform 250ms ${({ theme }) => theme.cubic},
    fill 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.secondary};
    transform: scale(1.1);
  }

  @media (min-width: ${tablet}) {
    height: 22px;
    width: 22px;
  }
`;
