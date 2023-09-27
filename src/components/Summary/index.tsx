import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { SummaryContainer, SummaryCard } from './styles'
import { useTheme } from 'styled-components'

export function Summary() {
  const theme = useTheme()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-light']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red']} />
        </header>

        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme['white']} />
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
