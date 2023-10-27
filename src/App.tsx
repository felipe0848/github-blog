import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { BlogContextProvider } from './contexts/blog-context'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
