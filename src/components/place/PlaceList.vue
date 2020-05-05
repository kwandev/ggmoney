<template>
  <div class="place-list" :class="{ fold: isFold }">
    <loading v-if="loading" />

    <ul class="places">
      <place-list-item
        v-for="(item, index) in placeList"
        :key="`${item.CMPNM_NM}_${index}`"
        :place="item"
        :class="{
          selected: place.CMPNM_NM === item.CMPNM_NM
        }"
        @select="onSelect"
      />
    </ul>

    <div class="btn-spread-fold" @click="onFold">{{ foldText }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/form/Loading'
import PlaceListItem from './PlaceListItem'

export default {
  name: 'PlaceList',
  components: {
    Loading,
    PlaceListItem
  },
  data() {
    return {
      isFold: false
    }
  },
  computed: {
    ...mapState('place', {
      loading: 'loading',
      placeList: 'placeList',
      place: 'place'
    }),
    foldText() {
      return this.isFold ? '펼치기 ↓' : '접기 ↑'
    }
  },
  methods: {
    onFold() {
      this.isFold = !this.isFold
    },
    onSelect(place) {
      if (!this.isFold) {
        this.isFold = true
      }

      this.$store.commit('place/setPlace', { ...place })
    }
  }
}
</script>

<style lang="scss" scoped></style>
