import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    uniqueId: 'A2522EFC1118D13272620CEAE7630AE3',
    showMethod: window.sessionStorage.getItem('showMethod'),
    mainNavState: window.sessionStorage.getItem('mainNavState'),
    subNavState: window.sessionStorage.getItem('subNavState'),
    currentProductItem: window.sessionStorage.getItem('currentProductItem'),
    screenHeight: '0',
    screenWidth: '0'
  },
  getters: {
    getShowMethod (state) {
      return state.showMethod
    },
    getScreenWidth (state) {
      return state.screenWidth
    },
    getCurrentProductItem (state) {
      if (typeof (state.currentProductItem) === 'string') {
        return JSON.parse(state.currentProductItem)
      } else {
        return state.currentProductItem
      }
    }
  },
  mutations: {
    setShowMethod (state, showMethod) {
      state.showMethod = showMethod
      window.sessionStorage.setItem('showMethod', showMethod)
    },
    setMainNavState (state, mainNavState) {
      state.mainNavState = mainNavState
      window.sessionStorage.setItem('mainNavState', mainNavState)
    },
    setSubNavState (state, subNavState) {
      state.subNavState = subNavState
      window.sessionStorage.setItem('subNavState', subNavState)
    },
    setScreenHeight (state, screenHeight) {
      state.screenHeight = screenHeight
    },
    setScreenWidth (state, screenWidth) {
      state.screenWidth = screenWidth
    },
    setCurrentProductItem (state, currentProductItem) {
      state.currentProductItem = currentProductItem
      // console.log('--------sdf--------')
      window.sessionStorage.setItem('currentProductItem', JSON.stringify(currentProductItem))
    }
  },
  actions: {
    setShowMethod ({ commit }, showMethod) {
      commit('setShowMethod', showMethod)
    },
    setMainNavState ({ commit }, mainNavState) {
      commit('setMainNavState', mainNavState)
    },
    setSubNavState ({ commit }, subNavState) {
      commit('setSubNavState', subNavState)
    },
    setScreenHeight ({ commit }, screenHeight) {
      commit('setScreenHeight', screenHeight)
    },
    setScreenWidth ({ commit }, screenWidth) {
      commit('setScreenWidth', screenWidth)
    },
    setCurrentProductItem ({ commit }, currentProductItem) {
      commit('setCurrentProductItem', currentProductItem)
    }
  }
})
