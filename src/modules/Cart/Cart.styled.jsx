import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';

export const Wrap = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: ${tablet}) {
    grid-template-areas:
      'form cart'
      'form submit';

    grid-template-columns: 1fr 1fr;

    & > .form {
      grid-area: form;
    }

    & > .cart {
      grid-area: cart;
    }

    & > .submit {
      grid-area: submit;
      align-self: end;
    }
  }

  & > .cart {
    max-height: 480px;
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
`;

export const MapLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 434px;
`;
