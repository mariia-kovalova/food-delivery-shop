import styled from '@emotion/styled';

export const Field = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: ${props => props.textPrimary};
`;

export const Input = styled.input`
  background-color: #fff;
  outline: none;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  color: #212121;
  padding: 0.875rem;

  width: 100%;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: ${props => props.theme.text};
  }
`;
