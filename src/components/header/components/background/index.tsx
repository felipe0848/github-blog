import leftLines from '../../assets/left-lines-effect.svg'
import rightLines from '../../assets/right-lines-effect.svg'
import leftCircle from '../../assets/left-ellipse-shadow.svg'
import rightCircle from '../../assets/right-ellipse-shadow.svg'
import centerBox from '../../assets/center-box-light.svg'
import {
  CenterBox,
  LeftCircle,
  LeftLines,
  RightCircle,
  RightLines,
} from './styles'

export function HeaderBackground() {
  return (
    <>
      <LeftLines src={leftLines} alt="" />
      <RightLines src={rightLines} alt="" />
      <RightCircle src={rightCircle} alt="" />
      <LeftCircle src={leftCircle} alt="" />
      <CenterBox src={centerBox} alt="" />
    </>
  )
}
