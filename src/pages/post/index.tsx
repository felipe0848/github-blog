import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostContainer,
  PostHeaderContainer,
  PostHeaderFooter,
  PostHeaderNavigation,
  PostTextContainer,
} from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { BlogContext } from '../../contexts/blog-context'
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Markdown from 'react-markdown'

export function Post() {
  const { numberPost } = useParams()
  const { posts } = useContext(BlogContext)
  const currentPost = posts.find((post) => post.number === Number(numberPost))

  return (
    <PostContainer>
      <PostHeaderContainer>
        <PostHeaderNavigation>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
            <span>Voltar</span>
          </NavLink>
          <a href={currentPost?.html_url}>
            <span>Ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </PostHeaderNavigation>
        <h2>{currentPost?.title}</h2>
        <PostHeaderFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} size="1x" />
            <p>{currentPost?.user.login}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} size="1x" />
            <p>
              {currentPost?.created_at &&
                formatDistanceToNow(new Date(currentPost?.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} size="1x" />
            <p>{currentPost?.comments} comentários</p>
          </div>
        </PostHeaderFooter>
      </PostHeaderContainer>
      <PostTextContainer>
        <Markdown>{currentPost?.body}</Markdown>
      </PostTextContainer>
    </PostContainer>
  )
}
