import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/logo.svg'
import { Button } from '../Button'
import * as Dialog from '@radix-ui/react-dialog'

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

          <Dialog.Portal>
            {/* Portal é uma funcionalidade do react de reendenizar um elemento filho dentro de um outro local da DOM, "coloca o conteudo fora de todas as divs"*/}
            <Dialog.Overlay />
            {/* fundo escuro com a opcadidade baixa */}
            <Dialog.Content>
              {/* Conteudo do modal */}
              <Dialog.Title>Nova Transação</Dialog.Title>
              {/* Titulo do modal para questoes de acessibilidade, assim como Dialog.Description*/}
              <Dialog.Close />
              {/* Botão de fechar */}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
