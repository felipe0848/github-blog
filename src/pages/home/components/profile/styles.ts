import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: -5.5rem;
  width: 100;
  padding: 2rem;
  display: flex;
  gap: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  > img {
    width: 9.25em;
    height: 9.35rem;
  }
`
export const ProfileTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 1.3;
  }
  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    span {
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`
export const ProfileFooter = styled.footer`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    > svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
