import coverImg from '../../assets/header-cover.svg'
import logoImg from '../../assets/logo.svg'
import { BackgroundImg, HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <BackgroundImg src={coverImg} alt="" />
      <img src={logoImg} alt="" />
    </HeaderContainer>
  )
}
