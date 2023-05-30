import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import { BaseButton } from 'shared/styles/components/BaseButton.styled';

export const Wrap = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: ${tablet}) {
    grid-template-areas:
      'form cart'
      'form cart';

    grid-template-columns: 1fr 1fr;

    & > .form {
      grid-area: form;
    }

    & > .cart {
      grid-area: cart;
      height: 55vh;
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

export const SubmitWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: auto;
  padding: 20px;
  width: calc(50% - 20px);
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
  padding: 8px 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const Info = styled.p`
  margin: 0 auto;
  padding-top: 30vh;
  width: 300px;
`;
