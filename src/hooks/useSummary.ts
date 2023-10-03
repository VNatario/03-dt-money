import { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'

export function useSummary() {
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
    },
  )

  return summary
}
