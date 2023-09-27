import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/logo.svg'
import { Button } from '../Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        {/* Usando dialog do radix para criar um modal 
        porque RADIX ? ==> radix seguem as regras de acessibilidade 
        e o radix não fornece um elemento com uma estilização predefinida */}

        <Dialog.Root>
          {/* Dialog.Root precisa ficar envolta de todo o contexto do modal, tanto do botão quanto do modal*/}
          <Dialog.Trigger asChild>
            {/* Trigger é o que vai fazer abrir ou fechar o modal, onde o mesmo já é um button
            Porém pode ser usado a prop asChild para que o trigger utilize o elemento dentro da tag Root.Trigger
          */}
            <Button content="Nova Transação" />
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
