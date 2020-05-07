<template>
  <div class="main">
    <div class="container">
      <search-form />

      <place-list v-if="total" />

      <div v-if="total === 0" class="welcome">
        <p>지역, 상호명을 이용해 경기지역화폐 가맹점을 검색해보세요</p>
        <img src="img/welcome.png" alt="" />
      </div>

      <place-map v-if="place.REFINE_WGS84_LAT && place.REFINE_WGS84_LOGT" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchForm from '@/components/form/SearchForm'
import PlaceList from '@/components/place/PlaceList'
import PlaceMap from '@/components/place/PlaceMap'

export default {
  name: 'Main',
  components: {
    SearchForm,
    PlaceList,
    PlaceMap
  },
  computed: {
    ...mapState('place', {
      place: 'place',
      total: 'total'
    })
  }
}
</script>
