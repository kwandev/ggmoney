<template>
  <div class="main">
    <div class="container">
      <search-form />

      <place-list />

      <place-map v-if="place.REFINE_WGS84_LAT && place.REFINE_WGS84_LOGT" />
    </div>

    <!-- <portal to="portal">
      <p>@@@@@@@@@@@@@@@This slot content will be rendered wherever the is located.</p>
    </portal> -->
  </div>
</template>

<script>
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
    place() {
      return this.$store.state.place.place
    }
  }
}
</script>
