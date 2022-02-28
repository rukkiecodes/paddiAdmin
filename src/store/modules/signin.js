// @ts-nocheck
import router from "../../router"
import Vue from "vue"
import axios from "axios"

export default {
  state: {
    credential: {
      email: "",
      password: "",
    },

    loading: false,
  },

  mutations: {
    signinUser: (state, response) => {
      state.loading = false
      console.log("login user: ", response.data)
      Vue.prototype.$cookies.set("PaddiData", response.data)
      if (response.data.success == true) {
        state.loading = false
        router.push("/dashboard/dashboard")
      } else {
        state.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error!!!",
          text: response.data.message,
        })
        router.push("/")
      }
    },
  },

  actions: {
    async signinUser({ commit }) {
      let emailRegEx = /\S+@\S+\.\S+/
      let input = this.state.signin.credential

      if (emailRegEx.test(input.email) && input.password != "") {
        this.state.signin.loading = true

        let options = {
          url:
            process.env.NODE_ENV === "production"
              ? "https://dev.trustpaddi.com/api/v1/login"
              : "/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: input,
        }

        await Vue.prototype
          .$axios(options)
          .then((response) => {
            commit("signinUser", response)
            this.state.signin.loading = false
          })
          .catch((error) => {
            this.state.signin.loading = false
            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Error!!!",
              text: error,
            })
          })
      } else {
        this.state.signin.loading = false
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
