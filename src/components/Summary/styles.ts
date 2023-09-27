import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`

interface SummaryCardProps {
  $variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme, $variant }) =>
    $variant === 'green' ? theme['green-dark'] : theme['tertiary-shape']};
  padding: 1.5rem 2rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    color: ${({ theme }) => theme['titles']};
    display: block;
    margin-top: 0.75rem;
    font-size: 2rem;
  }
`
