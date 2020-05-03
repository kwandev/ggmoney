import Vue from 'vue'
import config from '@/config'

const { GG_API_URI, GG_API_KEY } = config

const state = {
  placeList: [],
  loading: false,
  page: 1,
  size: 10,
  total: 0,
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
  setPlaceList(state, list) {
    state.placeList = list
  },
  setPlace(state, place) {
    state.place = place
  },
  setFeeds(state, list) {
    const { data, total, current_page, last_page } = list
    state.page = current_page
    state.total = total
    state.lastPage = last_page
    if (state.page > 0) {
      state.feeds = [...state.feeds].concat(data)
    } else {
      state.feeds = data
    }
  }
}

const actions = {
  async search({ commit }, options) {
    try {
      commit('setLoading', true)

      const {
        data: { RegionMnyFacltStus }
      } = await Vue.axios.get(`${GG_API_URI}`, {
        params: {
          KEY: GG_API_KEY,
          Type: 'json',
          pIndex: state.page,
          pSize: state.size,
          ...options
        }
      })

      if (RegionMnyFacltStus && RegionMnyFacltStus.code === 'INFO-200') {
        commit('setTotal', 0)
        commit('setPlaceList', [])
      }

      const total = RegionMnyFacltStus[0].head[0].list_total_count
      const list = RegionMnyFacltStus[1].row

      commit('setTotal', total)
      commit('setPlaceList', list)
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
