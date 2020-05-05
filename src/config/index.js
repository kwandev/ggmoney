class Config {
  constructor() {}

  get GG_API_URI() {
    return process.env.VUE_APP_GG_API_URI
  }

  get GG_API_KEY() {
    return process.env.VUE_APP_GG_API_KEY
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
