import { SearchContainer } from './styles'

export function SearchForm() {
  return (
    <SearchContainer>
      <header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
