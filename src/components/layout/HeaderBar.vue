<template>
  <div class="header">
    <div class="container">
      <h1 class="logo">ggmoney</h1>

      <div class="btn btn-menu" v-b-toggle.sidebar>
        <b-icon icon="info-circle"></b-icon>
      </div>
    </div>

    <portal to="portal">
      <b-sidebar id="sidebar" class="sidebar" right backdrop shadow no-header>
        <template v-slot:default>
          <div class="container">
            <h4 class="logo">ggmoney</h4>
            <p>ggmoney는 경기지역화폐 가맹점을 검색하는 서비스입니다.</p>

            <p>
              <strong class="red">* 모든 경기지역화폐 가맹점이 재닌기본소득 가맹점은 아님을 알려드릅니다.</strong>
            </p>

            <p>
              지역, 상호명을 이용한 검색만 가능하며 내 주변 가맹점 정보는 지원하지 않습니다.
            </p>
            <p>
              내 주변 가맹점 정보를 알고싶으신 분은
              <a
                href="http://gmoney.or.kr/PageLink.do?link=forward:/gmoney/searchFranchisee.do&tempParam1=&menuNo=040000&subMenuNo=040100&thirdMenuNo="
                target="_blank"
              >
                경기지역화폐 가맹점찾기 </a
              >, <a href="https://map.naver.com/" target="_blank">네이버지도</a>,
              <a href="https://map.kakao.com/" target="_blank">카카오맵</a> 등을 이용해주세요.
            </p>

            <div class="contact">
              <a href="https://github.com/khwan7816/ggmoney" target="_blank" title="github 바로가기">
                <b-icon icon="people-circle" />
              </a>
              <a href="mailto:rudghks7816@gmail.com" title="이메일 보내기">
                <b-icon icon="envelope" />
              </a>
            </div>
            <div class="contact-sub">
              rudghks7816@gmail.com
            </div>
          </div>
        </template>
      </b-sidebar>
    </portal>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style lang="scss" scoped></style>
