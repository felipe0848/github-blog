import { SearchContainer } from './styles'
interface SearchFormProps {
  totalPosts: number
}
export function SearchForm({ totalPosts }: SearchFormProps) {
  return (
    <SearchContainer>
      <header>
        <strong>Publicações</strong>
        <span>{totalPosts} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
