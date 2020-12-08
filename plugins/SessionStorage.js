import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'ZuckerSystems.github.io', // your product name
      storage: window.sessionStorage
    })(store)
  })
}
