import Vue from "vue"

export default {
  state: {
    withdrawDialog: false,
    loading: false,
    withdrawBanks: [],
  },

  getters: {
    withdrawBanks: (state) => state.banks,
  },

  mutations: {
    getBanks: (state, response) => {
      state.resolvedAccount = Vue.prototype.$cookies.get("PaddiResolved")
      state.resolveBankAccountCredential =
        Vue.prototype.$cookies.get("PaddiResolved")
      state.withdrawBanks = []
      state.withdrawBanks.push(...response.banks)
    },
  },

  actions: {
    getBanks({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(`${location.origin}/banks`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          commit("getBanks", response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
