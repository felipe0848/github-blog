import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  align-items: start;
  padding-top: 4rem;
  justify-content: center;
  background: ${(props) => props.theme['base-profile']};
  position: relative;
  z-index: -2;
`
