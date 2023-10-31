/* eslint-disable camelcase */
import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}
interface Post {
  html_url: string
  number: number
  title: string
  labels: string[]
  body: string
  created_at: string
  comments: number
  user: User
}
interface BlogContextType {
  user: User
  posts: Post[]
  searchPost: (query: string) => void
}
export const BlogContext = createContext({} as BlogContextType)
interface BlogContextProviderProps {
  children: ReactNode
}
export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchUser() {
    const response = await api.get('/users/felipe0848')
    const { login, avatar_url, html_url, name, company, bio, followers } =
      response.data
    setUser({ login, avatar_url, html_url, name, company, bio, followers })
  }
  async function fetchPosts(filter?: string) {
    const query = filter
      ? `search/issues?q=${filter}%20repo:felipe0848/github-blog`
      : `search/issues?q=%20repo:felipe0848/github-blog`

    const response = await api.get(query)

    const filteredPosts = response.data.items.reduce(
      (acc: Post[], post: Post) => {
        const {
          html_url,
          number,
          title,
          labels,
          body,
          created_at,
          comments,
          user,
        } = post
        acc = [
          ...acc,
          {
            html_url,
            number,
            title,
            labels,
            body,
            created_at,
            comments,
            user,
          },
        ]
        return acc
      },
      [],
    )
    setPosts(filteredPosts)
  }

  function searchPost(filter: string) {
    fetchPosts(filter)
  }
  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, [])
  return (
    <BlogContext.Provider value={{ user, posts, searchPost }}>
      {children}
    </BlogContext.Provider>
  )
}
