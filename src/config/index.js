class Config {
  constructor() {}

  get GG_API_URI() {
    return 'https://openapi.gg.go.kr/RegionMnyFacltStus'
  }

  get GG_API_KEY() {
    return '6614ab25c4b444328c611e13841e1085'
  }

  get isMobile() {
    const filter = 'win16|win32|win64|mac'

    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) === -1) {
        return true
      }
    }
    return false
  }
}

const config = new Config()

export default config
