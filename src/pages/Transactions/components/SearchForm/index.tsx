import { MagnifyingGlass } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" />
      <Button
        content="Buscar"
        variant="outline"
        icon={<MagnifyingGlass size={20} />}
      />
    </SearchFormContainer>
  )
}
