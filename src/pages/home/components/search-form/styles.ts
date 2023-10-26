import styled from 'styled-components'

export const SearchContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
    }
    > span {
      color: ${(props) => props.theme['base-span']};
    }
  }
  > input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
