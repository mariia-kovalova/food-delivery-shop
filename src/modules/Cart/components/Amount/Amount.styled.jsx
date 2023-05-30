import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 4px 12px;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.bgPrimary};

  color: ${({ theme }) => theme.primary};
`;

export const Number = styled.p`
  cursor: default;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;

  text-align: center;
`;

export const Btn = styled.button`
  padding: 0px;
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  border: none;
  border-radius: 50%;

  transition: color 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic},
    transform 250ms ${({ theme }) => theme.cubic};

  &:hover {
    color: ${({ theme }) => theme.cardTextAccent};
    background-color: ${({ theme }) => theme.primaryTransparet};
    transform: scale(1.05);
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.disabled};
    background-color: transparent;
    transform: scale(1);
  }
`;
