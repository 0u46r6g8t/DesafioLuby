/* eslint-disable camelcase */
export interface Styled{
  color: string;
}

export interface IPropsGit {
  id: number
  name: string
  email: string
  login: string
  location: string
  company: string
  bio: string
  avatar_url: string
  followers_url: string
  following_url: string
  followers: number
  following: number
  public_gists: number
  public_repos: number
  starred_url: string
  userGet ?: string
}

export interface IPropsRepos {
  id: number
  name: string
  stargazers_count: number
  private: boolean
  descrition: string
}
