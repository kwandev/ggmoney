class Config {
  constructor() {}

  get GG_API_URI() {
    return process.env.VUE_APP_GG_API_URI
  }

  get GG_API_KEY() {
    return process.env.VUE_APP_GG_API_KEY
  }
}

const config = new Config()

export default config
