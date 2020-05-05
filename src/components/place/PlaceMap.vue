<template>
  <div class="place-map">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'PlaceMap',
  props: {},
  data() {
    return {
      latlng: null,
      map: null,
      marker: null
    }
  },
  computed: {
    place() {
      return this.$store.state.place.place
    },
    naverMap() {
      const address = this.place.REFINE_ROADNM_ADDR || this.place.REFINE_LOTNO_ADDR
      if (config.isMobile) {
        return `https://m.map.naver.com/search2/search.nhn?query=${address}`
      }
      return `https://map.naver.com/v5/search/${address}`
    }
  },
  watch: {
    'place.REFINE_WGS84_LAT'() {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.setLatLng()
      this.initMap()
    },
    setLatLng() {
      this.latlng = new naver.maps.LatLng(this.place.REFINE_WGS84_LAT, this.place.REFINE_WGS84_LOGT)
    },
    initMap() {
      const naverMap = this.$refs.map
      this.map = new naver.maps.Map(naverMap, {
        center: this.latlng,
        zoom: 15
      })

      this.drawMarker()
      this.drawInfoWindow()
    },
    drawMarker() {
      this.marker = new naver.maps.Marker({
        position: this.latlng,
        map: this.map
      })
    },
    drawInfoWindow() {
      const contentString = `
        <div class="naver-info-window">
          <h4>${this.place.CMPNM_NM}</h4>
          <a href="${this.naverMap}" target="_blank">네이버 지도로 보기</a>
        </div>
      `

      const infowindow = new naver.maps.InfoWindow({
        content: contentString
      })

      naver.maps.Event.addListener(this.marker, 'click', () => {
        if (infowindow.getMap()) {
          infowindow.close()
        } else {
          infowindow.open(this.map, this.marker)
        }
      })

      infowindow.open(this.map, this.marker)
    }
  }
}
</script>

<style lang="scss" scoped></style>
