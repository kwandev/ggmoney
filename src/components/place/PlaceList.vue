<template>
  <div class="place-list">
    <ul class="places">
      <place-list-item v-for="item in 10" :key="item" @select="onSelect" />
    </ul>

    <div class="btn-spread-fold" @click="onFold">{{ foldText }}</div>
  </div>
</template>

<script>
import PlaceListItem from './PlaceListItem'

export default {
  name: 'PlaceList',
  components: {
    PlaceListItem
  },
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
    },
    onSelect() {
      this.onFold()
    }
  }
}
</script>

<style lang="scss" scoped></style>
