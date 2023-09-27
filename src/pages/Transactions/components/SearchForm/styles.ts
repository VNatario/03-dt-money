import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: none;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
    padding: 1rem;
    line-height: 1.4;

    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  }
`
