import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:focus{
  outline: 0; 
  box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
}
body{
background:${(props) => props.theme['base-background']};
color: ${(props) => props.theme['base-text']}
}
body, input, textarea, button{
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

@media(max-width: 896px){
  html{
    font-size: 85%;
  }
}
`
