export default {
  namespaced: true,
  state: () => ({
    filterText: ''
  }),
  mutations: {
    filter (state, text) {
      state.filterText = text
    }
  }
}
