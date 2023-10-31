import { useForm } from 'react-hook-form'
import { SearchContainer } from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/blog-context'

type filterDataType = {
  filter: string
}
interface SearchFormProps {
  totalPosts: number
}
export function SearchForm({ totalPosts }: SearchFormProps) {
  const { handleSubmit, register } = useForm<filterDataType>()
  const { searchPost } = useContext(BlogContext)
  function handleFilter(data: filterDataType) {
    searchPost(data.filter)
  }
  return (
    <SearchContainer onSubmit={handleSubmit(handleFilter)}>
      <header>
        <strong>Publicações</strong>
        <span>{totalPosts} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('filter')}
      />
    </SearchContainer>
  )
}
