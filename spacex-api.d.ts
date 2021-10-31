export interface LaunchResponse {
  data: Launch[]
  total: number
}

export interface Launch {
  id: string
  name: string
  logo: {
    small: string | null
    large: string | null
  }
  date: string
  rocket: Rocket
}

export interface Rocket {
  id: string
  name: string
  images: string[]
}
