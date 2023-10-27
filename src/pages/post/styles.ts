import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 896px;
  padding: 0 1rem;
  margin: 0 auto;
`
export const PostHeaderContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-top: -5.5rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  > h2 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }
`
export const PostHeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
export const PostHeaderFooter = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem 2rem;
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
  @media (max-width: 425px) {
    flex-wrap: wrap;
  }
`

export const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  > pre {
    padding: 1rem;
    border-radius: 2px;
    background: ${(props) => props.theme['base-post']};
    white-space: break-spaces;
  }
`
