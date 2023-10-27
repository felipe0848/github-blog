import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 896px;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`
export const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  list-style: none;
  margin-top: 3rem;
  @media (max-width: 565px) {
    grid-template-columns: 1fr;
  }
`
export const PostCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 260px;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
`
export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  > strong {
    flex: 1;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
  }
  > span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`
export const PostCardContent = styled.span`
  color: ${(props) => props.theme['base-text']};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 565px) {
    -webkit-line-clamp: 7;
  }
  @media (max-width: 464px) {
    -webkit-line-clamp: 6;
  }
`
