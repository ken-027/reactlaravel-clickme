export interface ILogin {
  email: string
  password: string
}

export interface ISearch {
  search: string
  isPublish: boolean
}

export interface IFetchParam extends ILogin, ISearch {}

export interface IAuth {
  isAuth?: boolean
  forLogin?: boolean
}

// data object for fetching
export interface IUser {
  _id: string,
  email: string
  username: string
  name: string
  accessToken: string
  refreshToken: string
}


export interface IMeta {
  title: string
  description: string
  keywords: string
}

export interface IBrand {
  _id: string
  title: string
  description: string
  image: string
  isIcloudCheck: number
  meta: IMeta
  ordering: number
  published: number
}
//data object

//store bearstate
export interface IUserState {
  user: IUser
  setUser: (user: IUser | any) => void
}

export interface IBrandState {
  brands: IBrand[]
  setBrands: (brands: IBrand[]) => void
}
// end bearstate

type HTTP_METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT' 

export interface IFetch {
  url?: string
  body?: object
  method?: HTTP_METHOD
  refresh?: boolean
}

export interface IuseFetch {
  loading: boolean,
  data: object[] | object,
  error: Error | null
}