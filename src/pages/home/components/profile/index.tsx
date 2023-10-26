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

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/felipe0848.png" alt="" />
      <ProfileTextContainer>
        <ProfileHeader>
          <strong>Felipe Soares</strong>
          <a href="https://github.com/felipe0848">
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
            <p>felipe0848</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} size="1x" />
            <p>FreeLancer</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} size="1x" />
            <p>32 seguidores</p>
          </div>
        </ProfileFooter>
      </ProfileTextContainer>
    </ProfileContainer>
  )
}
