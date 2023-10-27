import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ProfileHeader,
  ProfileContainer,
  ProfileFooter,
  ProfileTextContainer,
} from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/blog-context'

export function Profile() {
  const { user } = useContext(BlogContext)
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <ProfileTextContainer>
        <ProfileHeader>
          <strong>{user.name}</strong>
          <a href={user.html_url}>
            <span>GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </ProfileHeader>
        <p>
          Sou um desenvolvedor web Fullstack, com conhecimento em JavaScript,
          TypeScript, React e Next.js.
        </p>
        <ProfileFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} size="1x" />
            <p>{user.login}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} size="1x" />
            <p>{user.company ? user.company : 'FreeLancer'}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} size="1x" />
            <p>{user.followers} seguidores</p>
          </div>
        </ProfileFooter>
      </ProfileTextContainer>
    </ProfileContainer>
  )
}
