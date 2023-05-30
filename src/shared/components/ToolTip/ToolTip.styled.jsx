import styled from '@emotion/styled/macro';
import { up } from 'shared/constants/tooltipPosition';

export const Trigger = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  position: absolute;
  top: ${({ position }) => (position === up ? '-45px' : 'calc(100% + 10px)')};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  display: flex;
  flex-wrap: wrap;

  width: 170px;

  background-color: transparent;
  color: transparent;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;

  transition: color 250ms ${({ theme }) => theme.cubic},
    background-color 250ms ${({ theme }) => theme.cubic};

  ${Trigger}:hover & {
    color: #fff;
    background-color: #333;
  }
`;
