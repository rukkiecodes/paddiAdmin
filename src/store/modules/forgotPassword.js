// @ts-nocheck
import router from "../../router"
import axios from "axios"
import vueCookies from "vue-cookies"
import Vue from "vue"

export default {
  state: {
    credential: {
      email: "",
    },

    loading: false,
  },

  mutations: {
    recoverUserPassword: (state, response) => {
      console.log(response)
      if (response.status == 200) {
        state.loading = false
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
        })
      } else {
        state.loading = false
      }
    },
  },

  actions: {
    async recoverUserPassword({ commit }) {
      const options = {
        url: "https://dev.trustpaddi.com/api/v1/forgot-password",
        method: "POST",
        data: this.state.forgotPassword.credential,
      }

      let emailRegEx = /\S+@\S+\.\S+/

      this.state.forgotPassword.loading = true

      if (emailRegEx.test(this.state.forgotPassword.credential.email)) {
        try {
          const response = await Vue.prototype.$axios(options)
          commit("recoverUserPassword", response)
          this.state.forgotPassword.loading = false
        } catch (error) {
          console.log(error)
          this.state.forgotPassword.loading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error!!!",
            text: `Sign in error. Check your details the try again.`,
          })
        }
      } else {
        this.state.forgotPassword.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error!!!",
          text: `Please complete the form and try again`,
        })
      }
    },
  },
}
