import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { Button } from '../Button'
import { Input } from '../Input'
import { X } from '@phosphor-icons/react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <Input type="text" placeholder="Descrição" required />
          <Input type="number" placeholder="Preço" required />
          <Input type="text" placeholder="Categoria" required />

          <Button content="Cadastrar" type="submit" />
        </form>
      </Content>
    </Dialog.Portal>
  )
}
