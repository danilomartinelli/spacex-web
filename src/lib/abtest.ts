import { setCookie, parseCookies } from 'nookies'

class ABTest {
  public key: string
  public availableFor: number
  public name: string

  public setAvailability(available: boolean): void {
    const key = this.getStorageKey()

    const value = this.availableFor + (available ? -0.1 : 0.1)

    setCookie(null, key, value.toString(), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })
  }

  constructor(key: string, availableFor: number, name: string) {
    this.key = key
    this.availableFor = availableFor
    this.name = name
  }

  private getStorageKey(): string {
    return `${this.key.toLocaleLowerCase()}_rf`
  }

  private getExpRandomFactor(): number {
    const cookies = parseCookies()

    const key = this.getStorageKey()

    if (cookies[key]) {
      return +cookies[key]
    }

    setCookie(null, key, Math.random().toFixed(2).toString(), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })

    return +cookies[key]
  }

  public isAvailable(): boolean {
    return (
      this.availableFor > 0 && this.getExpRandomFactor() <= this.availableFor
    )
  }
}

export const showImage = new ABTest('show-image', 0.5, 'showImage')
