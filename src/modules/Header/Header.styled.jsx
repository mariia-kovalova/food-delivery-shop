import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';

export const StyledDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & nav:nth-of-type(1) {
    @media (max-width: ${tablet}) {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
  }

  & nav:nth-of-type(2) {
    @media (min-width: ${tablet}) {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
  }
`;
