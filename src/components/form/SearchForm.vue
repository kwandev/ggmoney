<template>
  <div class="search-form">
    <b-form inline @submit.prevent="onSubmit">
      <label class="sr-only" for="sigun">시군</label>
      <b-form-select id="sigun" class="form-select" v-model="sigun" :options="sigunOptions" @change="onChange">
        <template v-slot:first>
          <b-form-select-option :value="''">시군 전체</b-form-select-option>
        </template>
      </b-form-select>

      <label class="sr-only" for="gu">구</label>
      <b-form-select id="gu" class="form-select" v-model="gu" :options="guOptions">
        <template v-slot:first>
          <b-form-select-option :value="''">전체</b-form-select-option>
        </template>
      </b-form-select>

      <b-form-input type="text" id="sangho" class="form-input" placeholder="상호명" v-model="name"></b-form-input>

      <button type="submit" class="btn btn-submit">
        <b-icon icon="search" class="icon-search"></b-icon>
      </button>
    </b-form>
  </div>
</template>

<script>
import sigungu from '@/assets/data/sigungu.json'

export default {
  name: 'SearchForm',
  data() {
    return {
      sigun: '',
      sigunOptions: [
        { value: 'A', text: 'Option A (from options prop)' },
        { value: 'B', text: 'Option B (from options prop)' }
      ],
      gu: '',
      guOptions: [],
      name: ''
    }
  },
  methods: {
    onSubmit() {
      const options = {
        SIGUN_NM: this.sigun,
        CMPNM_NM: this.name,
        REFINE_ROADNM_ADDR: this.gu,
        REFINE_LOTNO_ADDR: this.gu
      }
      this.$store.dispatch('place/search', options)
    },
    onChange() {
      const selected = this.sigunOptions.find((sigun) => {
        return sigun.value === this.sigun
      })

      this.guOptions = selected ? selected.gu : []
    }
  },
  created() {
    this.sigunOptions = sigungu.map((sigun) => {
      return {
        value: sigun.name,
        text: sigun.name,
        gu: sigun.gu ? sigun.gu : []
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  position: sticky;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid $gray;
  border-radius: 0.2rem;

  .form-select {
    flex: 1;
    width: 100%;
    border-color: $gray;
  }
  .form-input {
    flex: 2;
    border-color: $gray;
  }
  .btn-submit {
    flex: 0;
    padding: 0.2rem 0.5rem 0.5rem;
  }
}

@media screen and (max-width: $contents-width-m) {
  .search-form {
    .form-select,
    .form-input {
      font-size: $mobile-font-size;
    }
  }
}
</style>
