// @ts-nocheck
import vueCookies from "vue-cookies"
import router from "../../router"

export default {
  actions: {
    ifAuth() {
      const token = vueCookies.get("trustpaddi token")
      if (token) {
        if (location.pathname == "/dashboard/transaction")
          router.push("/dashboard/yourPaddiDashboard")
      } else {
        router.push("/")
      }
    },
  },
}
