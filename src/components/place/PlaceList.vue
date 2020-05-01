<template>
  <div class="place-list">
    <ul class="places">
      <li>샘플</li>
    </ul>

    <div class="btn-spread-fold" @click="onFold">{{ foldText }}</div>
  </div>
</template>

<script>
export default {
  name: 'PlaceList',
  data() {
    return {
      isFold: false
    }
  },
  computed: {
    foldText() {
      return this.isFold ? '펼치기 ↓' : '접기 ↑'
    }
  },
  methods: {
    onFold() {
      this.isFold = !this.isFold
    }
  }
}
</script>

<style lang="scss" scoped></style>
