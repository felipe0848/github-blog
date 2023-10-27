import styled from 'styled-components'

const BaseImg = styled.img`
  position: absolute;
  z-index: -1;
  flex: 1;
`

export const LeftLines = styled(BaseImg)`
  top: 4.4rem;
  left: 0;
`
export const RightLines = styled(BaseImg)`
  right: 0;
  top: 1.8rem;
`
export const LeftCircle = styled(BaseImg)`
  top: 0;
  left: 0;
  filter: blur(200px);
`
export const RightCircle = styled(BaseImg)`
  top: 0;
  right: 0;
  filter: blur(184px);
`
export const CenterBox = styled(BaseImg)`
  bottom: 0.5rem;
  filter: blur(106px);
`
