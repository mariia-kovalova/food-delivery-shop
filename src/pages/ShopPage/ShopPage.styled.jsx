import styled from '@emotion/styled';
import { desktop } from 'shared/constants/deviceSizes';
import { headerFooterHeight } from 'shared/constants/headerFooterHeight';

export const Wrap = styled.div`
  display: grid;
  gap: 20px;

  & > .shop-list {
    @media (max-width: ${desktop}) {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        height: 10px;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.borderModal};
        border-radius: 5px;
      }
    }
  }

  @media (min-width: ${desktop}) {
    grid-template-areas:
      'stores products'
      'stores products';

    grid-template-columns: 300px 1fr;

    & > .shop-list {
      grid-area: stores;
      height: calc(100vh - ${headerFooterHeight.desktop} - 40px);
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 0.5em;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.borderModal};
        border-radius: 5px;
      }
    }

    & > .products-list {
      grid-area: products;
      height: calc(100vh - ${headerFooterHeight.desktop} - 40px);
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 0.5em;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.borderModal};
        border-radius: 5px;
      }
    }
  }
`;
