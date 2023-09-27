import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem;
    background: ${({ theme }) => theme['secondary-shape']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighLightProps {
  $variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${({ $variant, theme }) =>
    $variant === 'income' ? theme['green-light'] : theme.red};
`
