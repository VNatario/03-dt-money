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
          <Dialog.Trigger asChild>
            <Button content="Nova Transação" />
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
