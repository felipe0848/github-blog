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
  async function fetchPosts() {
    const response = await api.get('/repos/felipe0848/github-blog/issues')
    const allPosts = response.data.reduce((acc: Post[], post: Post) => {
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
    }, [])
    setPosts(allPosts)
  }
  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, [])
  return (
    <BlogContext.Provider value={{ user, posts }}>
      {children}
    </BlogContext.Provider>
  )
}
