import router from "../../router"
import Vue from "vue"

export default {
  state: {
    credential: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      referral_code: "",
    },

    loading: false,
  },

  mutations: {
    signupUser: (state, response) => {
      console.log("response: ", response)
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.email[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$cookies.set("PaddiData", response)
        router.push("/verifyAccount")
      }
    },
  },

  actions: {
    async signupUser({ commit }) {
      let emailRegEx = /\S+@\S+\.\S+/

      this.state.signup.loading = true
      let input = this.state.signup.credential

      if (
        input.firstname != "" &&
        input.lastname != "" &&
        emailRegEx.test(input.email) &&
        input.password != "" &&
        input.password === input.password_confirmation
      ) {
        var myHeaders = new Headers()
        myHeaders.append("Accept", "application/json")

        var formdata = new FormData()
        formdata.append("firstname", input.firstname)
        formdata.append("lastname", input.lastname)
        formdata.append("email", input.email)
        formdata.append("password", input.password)
        formdata.append("password_confirmation", input.password_confirmation)
        if (input.referral_code)
          formdata.append("referral_code", input.referral_code)

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
        }

        fetch(
          process.env.NODE_ENV === "production"
            ? "https://dev.trustpaddi.com/api/v1/register"
            : "/api/register",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            commit("signupUser", result)
            this.state.signup.loading = false
          })
          .catch((error) => {
            this.state.signup.loading = false
            console.log("error signing up: ", error)
          })
      } else {
        this.state.signup.loading = false
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
