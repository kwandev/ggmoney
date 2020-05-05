<template>
  <div class="place-list" :class="{ fold: isFold }">
    <ul
      class="places"
      ref="places"
      v-infinite-scroll="onMoreList"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <place-list-item
        v-for="(item, index) in placeList"
        :key="`${item.CMPNM_NM}_${item.REFINE_ZIP_CD}_${index}`"
        :place="item"
        :class="{
          selected: place.REFINE_LOTNO_ADDR === item.REFINE_LOTNO_ADDR && place.TELNO === item.TELNO
        }"
        @select="onSelect($event, index)"
        :ref="`placeItem_${index}`"
      />
    </ul>

    <loading v-if="loading" />

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
      page: 'page',
      lastPage: 'lastPage',
      loading: 'loading',
      placeList: 'placeList',
      place: 'place'
    }),
    foldText() {
      return this.isFold ? '펼치기 ↓' : '접기 ↑'
    }
  },
  methods: {
    onMoreList() {
      if (this.placeList.length > 0 && this.page < this.lastPage) {
        this.$store.dispatch('place/search', {
          page: this.page + 1
        })
      }
    },
    onFold() {
      this.isFold = !this.isFold
    },
    onSelect(place, index) {
      if (!this.isFold) {
        this.isFold = true
      }

      this.$store.commit('place/setPlace', { ...place })

      this.$nextTick(() => {
        this.onScroll(index)
      })
    },
    onScroll(index) {
      this.$refs.places.scrollTop = this.$refs[`placeItem_${index}`][0].$el.offsetTop - 145
    }
  }
}
</script>

<style lang="scss" scoped></style>
