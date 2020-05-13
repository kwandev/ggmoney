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
  metaInfo: {
    title: '경기지역화폐 가맹점 찾기 - ggmoney',
    meta: [
      // SEO setting
      { name: 'description', content: 'ggmoney는 경기지역화폐 가맹점을 검색할 수 있는 웹사이트입니다.' },
      { name: 'keywords', content: 'ggmoney, 경기지역화폐, 재난기본소득, 가맹점' },
      { name: 'author', content: 'khwan' }
    ]
  },
  components: { HeaderBar }
}
</script>

<style lang="scss"></style>
