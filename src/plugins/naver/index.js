const URL = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.VUE_APP_NAVER_API_KEY}`

const script = document.createElement('script')

if (script) {
  script.setAttribute('src', URL)
  script.id = 'naver-map-load'
  document.head.appendChild(script)
}
