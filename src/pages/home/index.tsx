import { useNavigate } from 'react-router-dom'
import { Profile } from './components/profile'
import { SearchForm } from './components/search-form'
import {
  HomeContainer,
  PostCard,
  PostCardContent,
  PostCardHeader,
  PostList,
} from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/blog-context'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Markdown from 'react-markdown'

export function Home() {
  const navigate = useNavigate()
  const { posts } = useContext(BlogContext)
  const totalPosts = posts.length
  function handleNavigateToPost(postNumber: number) {
    navigate(`/post/${postNumber}`)
  }

  return (
    <HomeContainer>
      <Profile />
      <SearchForm totalPosts={totalPosts} />
      <PostList>
        {posts.map((post) => (
          <PostCard
            onClick={() => handleNavigateToPost(post.number)}
            key={post.number}
          >
            <PostCardHeader>
              <strong>{post.title}</strong>
              <span>
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </PostCardHeader>
            <PostCardContent>
              <Markdown>{post.body}</Markdown>
            </PostCardContent>
          </PostCard>
        ))}
      </PostList>
    </HomeContainer>
  )
}
