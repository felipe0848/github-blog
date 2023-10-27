import logoImg from '../../assets/logo.svg'
import { HeaderBackground } from './components/background'
import { HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <HeaderBackground />
    </HeaderContainer>
  )
}
