import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import { StyledBaseLink } from 'shared/styles/components/StyledBaseLink';

export const Wrap = styled.div`
  padding-top: 80px;
  text-align: center;
`;

export const StyledLink = styled(StyledBaseLink)`
  position: relative;

  padding: 8px 16px;
  margin: 20px auto;
  width: 200px;

  font-size: 16px;

  @media (min-width: ${tablet}) {
    width: 250px;
    font-size: 20px;
  }

  &:hover {
    color: ${({ theme }) => theme.cardTextHover};
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  right: 14%;
  transform: translate(0, -50%);

  @media (min-width: ${tablet}) {
    right: 10%;
  }

  padding: 1px;

  fill: transparent;
  stroke: ${({ theme }) => theme.bgPrimary};
  transition: stroke 250ms ${({ theme }) => theme.cubic};

  a:hover & {
    stroke: ${({ theme }) => theme.cardTextHover};
  }
`;
