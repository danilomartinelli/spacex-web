import { parseCookies, setCookie } from 'nookies'
import { v4 } from 'uuid'

export const useUser = () => {
  const getUserUuid = () => {
    const cookies = parseCookies()

    const key = 'user-uuid'

    if (cookies[key]) {
      return cookies[key]
    }

    setCookie(null, key, v4(), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })

    return cookies[key]
  }

  return getUserUuid()
}
