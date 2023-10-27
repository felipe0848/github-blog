import styled from 'styled-components'

const BaseImg = styled.img`
  position: absolute;
  z-index: -1;
`

export const LeftLines = styled(BaseImg)`
  top: 4.4rem;
  left: 0;
  @media (max-width: 896px) {
    width: 40vw;
  }
  @media (max-width: 695px) {
    width: 90vw;
  }
`
export const RightLines = styled(BaseImg)`
  right: 0;
  top: 1.8rem;
  @media (max-width: 896px) {
    width: 40vw;
  }
  @media (max-width: 695px) {
    width: 0vw;
  }
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
  max-width: 100%;
`
