<template>
  <div id="app">
    <header-bar></header-bar>

    <router-view />

    <portal-target name="portal" />
  </div>
</template>

<script>
import HeaderBar from '@/components/layout/HeaderBar'
export default {
  name: 'App',
  components: { HeaderBar }
}
</script>

<style lang="scss"></style>
