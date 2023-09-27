import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'
import { Button } from '../Button'
import { Input } from '../Input'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      {/* Portal é uma funcionalidade do react de reendenizar um elemento filho dentro de um outro local da DOM, "coloca o conteudo fora de todas as divs"*/}
      <Overlay />
      {/* <Dialog.Overlay /> */}
      {/* fundo escuro com a opcadidade baixa */}
      <Content>
        {/* <Dialog.Content> */}
        {/* Conteudo do modal */}
        <Dialog.Title>Nova Transação</Dialog.Title>
        {/* Titulo do modal para questoes de acessibilidade, assim como Dialog.Description*/}

        <form action="">
          <Input type="text" placeholder="Desccrião" required />
          <Input type="number" placeholder="Preço" required />
          <Input type="text" placeholder="Categoria" required />

          <Button content="Cadastrar" type="submit" />
        </form>
        <Dialog.Close />
        {/* Botão de fechar */}
        {/* </Dialog.Content> */}
      </Content>
    </Dialog.Portal>
  )
}
