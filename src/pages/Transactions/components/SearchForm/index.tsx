import { MagnifyingGlass } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { SearchFormContainer } from './styles'
import { Input } from '../../../../components/Input'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <Input type="text" placeholder="Busque uma transação" />
      <Button
        content="Buscar"
        variant="outline"
        icon={<MagnifyingGlass size={20} />}
      />
    </SearchFormContainer>
  )
}
