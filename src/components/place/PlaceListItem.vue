<template>
  <li class="place-item" @click="onSelect">
    <div class="place-info">
      <h3 class="place--name">투썸플레이스 복사역점</h3>
      <p class="place--type">일반휴게음식 - 서양음식</p>
    </div>
    <div class="place-address">
      <div class="place--road">경기도 동두천시 지행로 53</div>
      <div class="place--lotno">경기도 동두천시 지행동 693-5번지 1층 102호, 2층 전체</div>
    </div>
    <div class="place-contact">
      <a href="tel:031-866-2530" class="place--tel"><b-icon icon="phone" /> 031-866-2530</a>
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
  data() {
    return {}
  },
  computed: {},
  methods: {
    onSelect() {
      this.$emit('select')
    }
  }
}
</script>

<style lang="scss" scoped></style>
