import { MagnifyingGlass } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { SearchFormContainer } from './styles'
import { Input } from '../../../../components/Input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    //resolvendo a promise apos 2s
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <Input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <Button
        content="Buscar"
        variant="outline"
        icon={<MagnifyingGlass size={20} />}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  )
}
