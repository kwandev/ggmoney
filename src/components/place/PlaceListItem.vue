<template>
  <li class="place-item" @click="onSelect">
    <div class="place-info">
      <h3 class="place--name">{{ place.CMPNM_NM }}</h3>
      <p class="place--type">{{ place.INDUTYPE_NM }}</p>
    </div>
    <div class="place-address">
      <div class="place--road">{{ place.REFINE_ROADNM_ADDR }}</div>
      <div class="place--lotno">{{ place.REFINE_LOTNO_ADDR }}</div>
    </div>
    <div class="place-contact">
      <template v-if="place.TELNO">
        <a :href="`tel:${place.TELNO}`" class="place--tel"><b-icon icon="phone" /> {{ place.TELNO }}</a>
      </template>
      <template v-else>
        <span class="place--tel"><b-icon icon="phone" /> &ndash;</span>
      </template>

      <template v-if="place.REFINE_ROADNM_ADDR || place.REFINE_LOTNO_ADDR">
        <a :href="naverMap" target="_blank" class="place--map"><b-icon icon="map" /> 네이버 지도로 보기</a>
      </template>
      <template v-else>
        <div class="place--map"><b-icon icon="map" /> 네이버 지도로 보기</div>
      </template>
    </div>
  </li>
</template>

<script>
import config from '@/config'
export default {
  name: 'PlaceListItem',
  props: {
    place: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    naverMap() {
      const address = this.place.REFINE_ROADNM_ADDR || this.place.REFINE_LOTNO_ADDR
      if (config.isMobile) {
        return `https://m.map.naver.com/search2/search.nhn?query=${address}`
      }
      return `https://map.naver.com/v5/search/${address}`
    }
  },
  methods: {
    onSelect() {
      this.$emit('select', this.place)
    }
  }
}
</script>

<style lang="scss" scoped></style>
