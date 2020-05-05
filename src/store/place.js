import Vue from 'vue'
import config from '@/config'

const { GG_API_URI, GG_API_KEY } = config

const state = {
  placeList: [],
  loading: false,
  page: 1,
  size: 10,
  total: 0,
  lastPage: 0,
  searchInfo: {},
  // 선택한 가맹정
  place: {}
}

const getters = {
  // categories(state) {
  //   return state.categories
  // }
}

const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setTotal(state, total) {
    state.total = total
  },
  setPlaceList(state, { list, params }) {
    state.page = params.pIndex || 1
    state.size = params.pSize || 10
    state.lastPage = Math.ceil(state.total / state.size)
    state.searchInfo.sigun = params.SIGUN_NM || ''
    state.searchInfo.gu = params.REFINE_ROADNM_ADDR || params.REFINE_LOTNO_ADDR || ''
    state.searchInfo.name = params.CMPNM_NM || ''

    if (state.page > 1) {
      state.placeList = [...state.placeList].concat(list)
    } else {
      state.placeList = list
    }
  },
  setPlace(state, place) {
    state.place = place
  }
}

const actions = {
  async search({ commit }, options) {
    try {
      commit('setLoading', true)

      const params = {
        pIndex: options.page || state.page,
        pSize: options.size || state.size,
        SIGUN_NM: options.sigun || state.searchInfo.sigun,
        REFINE_ROADNM_ADDR: options.gu || state.searchInfo.gu,
        REFINE_LOTNO_ADDR: options.gu || state.searchInfo.gu,
        CMPNM_NM: options.name || state.searchInfo.name
      }

      const {
        data: { RegionMnyFacltStus }
      } = await Vue.axios.get(`${GG_API_URI}`, {
        params: {
          KEY: GG_API_KEY,
          Type: 'json',
          ...params
        }
      })

      if (RegionMnyFacltStus && RegionMnyFacltStus.code === 'INFO-200') {
        commit('setTotal', 0)
        commit('setPlaceList', [])
      }

      const total = RegionMnyFacltStus[0].head[0].list_total_count
      const list = RegionMnyFacltStus[1].row

      commit('setTotal', total)
      commit('setPlaceList', { list, params })
    } catch (e) {
      throw new Error(e)
    } finally {
      commit('setLoading', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
