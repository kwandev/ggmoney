<template>
  <div class="main">
    <div class="container">
      <search-form />

      <place-list />
    </div>
    <portal to="portal">
      <p>@@@@@@@@@@@@@@@This slot content will be rendered wherever the is located.</p>
    </portal>
  </div>
</template>

<script>
import SearchForm from '@/components/form/SearchForm'
import PlaceList from '@/components/place/PlaceList'

export default {
  name: 'Main',
  components: {
    SearchForm,
    PlaceList
  }
}
</script>
