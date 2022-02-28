import router from "../../router"
import Vue from "vue"

export default {
  state: {
    credential: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },

    addBankAccountCredential: {
      bank_id: "",
      account_no: "",
      account_name: "",
    },

    resolveBankAccountCredential: {
      bank_id: "",
      account_no: "",
    },

    removeBankAccountCredential: {
      bank_id: "",
    },

    loading: false,

    logoutLoading: false,

    addBankAccountLoading: false,

    resolveBankAccountLoading: false,

    removeBankAccountLoading: false,

    banks: [],

    resolvedAccount: {},

    userBanks: [],
  },

  getters: {
    banks: (state) => state.banks,
    userBanks: (state) => state.userBanks,
  },

  mutations: {
    changePassword: (state, response) => {
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.password[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-unlock-alt"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    logoutOfAccount: (state, response) => {
      if (response.success == true) {
        Vue.prototype.$cookies.remove("PaddiData")
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-unlock-alt"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
        router.push("/")
      }
    },

    getBanks: (state, response) => {
      console.log("getBanks: ", response)
      state.banks = []
      state.banks.push(...response.banks)
    },

    getUserBanks: (state, response) => {
      console.log("getUserBanks: ", response)
      state.userBanks = []
      state.userBanks.push(...response.banks)
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },

    addBankAccount: (state, response) => {
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.bank_id[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    resolveBackAccount: (state, response) => {
      console.log("resolveBackAccount: ", response)
      // state.resolvedAccount = Vue.prototype.$cookies.get("PaddiResolved")
      // state.resolveBankAccountLoading = false
      // if (response.message == "The given data was invalid.") {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-exclamation-triangle"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Oops!!!",
      //     text: response.errors.account_no[0],
      //   })
      // }
      // if (response.message == "The given data was invalid.") {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-exclamation-triangle"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Oops!!!",
      //     text: response.errors.bank_id[0],
      //   })
      // }
      // if (response.success == true) {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-university"></i>`,
      //     border: "#46C93A",
      //     position: "top-right",
      //     title: "Yippee!!!",
      //     text: response.message,
      //   })
      // }
      // if (response.success == false) {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-university"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Yippee!!!",
      //     text: response.message,
      //   })
      // }
    },

    removeBankAccount: (state, response) => {
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.bank_id[0],
        })
      }
      if (response.success == true) {
        state.resolveBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },
  },

  actions: {
    changePassword({ commit }) {
      if (
        this.state.settings.credential.password != "" &&
        this.state.settings.credential.password_confirmation != "" &&
        this.state.settings.credential.password ===
          this.state.settings.credential.password_confirmation
      ) {
        this.state.settings.loading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(
          process.env.NODE_ENV === "production"
            ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/change-password"
            : "/api/user/change-password",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.settings.credential),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            commit("changePassword", response)
            this.state.settings.loading = false
          })
          .catch((error) => {
            this.state.settings.loading = false
          })
      } else {
        this.state.settings.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    logoutOfAccount({ commit }) {
      this.state.settings.logoutLoading = true
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/logout"
          : "/api/user/logout",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          commit("logoutOfAccount", response)
          this.state.settings.logoutLoading = false
        })
        .catch((error) => {
          this.state.settings.logoutLoading = false
        })
    },

    getBanks({ commit }) {
      fetch(
        process.env.NODE_ENV === "production"
          ? "https://dev.trustpaddi.com/api/v1/banks"
          : "/api/banks",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((response) => {
          commit("getBanks", response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getUserBanks({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/user-banks"
          : "/api/user/user-banks",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          commit("getUserBanks", response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    addBankAccount({ commit, dispatch }) {
      let input = this.state.settings.addBankAccountCredential
      if (
        input.bank_id != "" &&
        input.account_no != "" &&
        input.account_name != ""
      ) {
        this.state.settings.addBankAccountLoading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(
          process.env.NODE_ENV === "production"
            ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/add-bank"
            : "/api/user/add-bank",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getUserBanks").then(() => {
              commit("addBankAccount", response)
              this.state.settings.addBankAccountLoading = false
            })
          })
          .catch((error) => {
            console.log(error)
            this.state.settings.addBankAccountLoading = false
          })
      } else {
        this.state.settings.addBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    resolveBackAccount({ commit }) {
      let input = this.state.settings.resolveBankAccountCredential
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      if (input.bank_id != "" && input.account_no != "") {
        this.state.settings.resolveBankAccountLoading = true
        fetch(
          process.env.NODE_ENV === "production"
            ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/resolve-account"
            : "/api/user/resolve-account",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            commit("resolveBackAccount", response)
            this.state.settings.resolveBankAccountLoading = false
          })
          .catch((error) => {
            console.log(error)
            this.state.settings.resolveBankAccountLoading = false

            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Oops!!!",
              text: error,
            })
          })
      } else {
        this.state.settings.resolveBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    removeBankAccount({ commit, dispatch }) {
      if (this.state.settings.removeBankAccountCredential.bank_id != "") {
        console.log(this.state.settings.removeBankAccountCredential)
        this.state.settings.removeBankAccountLoading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(
          process.env.NODE_ENV === "production"
            ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/remove-bank"
            : "/api/user/remove-bank",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              this.state.settings.removeBankAccountCredential
            ),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getUserBanks").then(() => {
              commit("removeBankAccount", response)
              this.state.settings.removeBankAccountLoading = false
            })
          })
          .catch((error) => {
            console.log(error)
            this.state.settings.removeBankAccountLoading = false
          })
      } else {
        this.state.settings.removeBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },
  },
}
