import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { SummaryContainer, SummaryCard } from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'

export function Summary() {
  const theme = useTheme()
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, cur) => {
      if (cur.type === 'income') {
        acc.income += cur.value
        acc.total += cur.value
      } else {
        acc.outcome += cur.value
        acc.total -= cur.value
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-light']} />
        </header>

        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red']} />
        </header>

        <strong>{summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme['white']} />
        </header>

        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
