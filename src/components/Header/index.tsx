import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/logo.svg'
import { Button } from '../Button'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Button content="Nova Transação" />
      </HeaderContent>
    </HeaderContainer>
  )
}
