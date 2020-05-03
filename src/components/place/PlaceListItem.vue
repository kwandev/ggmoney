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
      <a href="tel:031-866-2530" class="place--tel"><b-icon icon="phone" /> {{ place.TELNO }}</a>
      <div class="place--map">
        <b-icon icon="map" />
        네이버 지도로 보기
      </div>
    </div>
  </li>
</template>

<script>
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
  methods: {
    onSelect() {
      this.$emit('select', this.place)
    }
  }
}
</script>

<style lang="scss" scoped></style>
