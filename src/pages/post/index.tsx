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
import { NavLink } from 'react-router-dom'

export function Post() {
  return (
    <PostContainer>
      <PostHeaderContainer>
        <PostHeaderNavigation>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
            <span>Voltar</span>
          </NavLink>
          <a href="">
            <span>Ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </PostHeaderNavigation>
        <h2>JavaScript data types and data structures</h2>
        <PostHeaderFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} size="1x" />
            <p>felipe0848</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} size="1x" />
            <p>Há 1 dia</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} size="1x" />
            <p>5 comentários</p>
          </div>
        </PostHeaderFooter>
      </PostHeaderContainer>
      <PostTextContainer>
        {`Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean`}
      </PostTextContainer>
    </PostContainer>
  )
}
