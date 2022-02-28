export default {
  state: {
    refundsFilters: [
      { title: "All" },
      { title: "Successful" },
      { title: "Pending" },
      { title: "Failed" },
    ],
    search: ""
  },
  getters: {
    refundsFilters: (state) => state.refundsFilters,
  },
  mutations: {},
  actions: {},
}
