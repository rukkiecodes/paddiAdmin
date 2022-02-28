import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"

// import goodAndProductBuyer from "./modules/goodAndProductBuyer"
// import deliveryInfo from "./modules/deliveryInfo"
// import traderCrypto from "./modules/traderCrypto"
// import clientServices from "./modules/clientServices"
// import custumerCrypto from "./modules/custumerCrypto"
// import goodAndProductSeller from "./modules/goodAndProductSeller"
// import proofOfPayment from "./modules/proofOfPayment"
// import providerServices from "./modules/providerServices"
// import dashboardNavigation from "./modules/dashboardNavigation"
// import signup from "./modules/signup"
// import signin from "./modules/signin"
// import logout from "./modules/logout"
// import restrict from "./modules/restrict"
// import paddiLink from "./modules/paddiLink"
// import paddiPay from "./modules/paddiPay"
// import account from "./modules/account"
// import forgotPassword from "./modules/forgotPassword"
// import verifyAccount from "./modules/verifyAccount"
// import transaction from "./modules/transaction"
// import refunds from "./modules/refunds"
// import settings from "./modules/settings"
// import withdraw from "./modules/withdraw"
// import customerSupport from "./modules/customerSupport"
// import product from "./modules/product"
// import orders from "./modules/orders"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  
  modules: {
    // goodAndProductBuyer,
    // deliveryInfo,
    // traderCrypto,
    // clientServices,
    // custumerCrypto,
    // goodAndProductSeller,
    // proofOfPayment,
    // providerServices,
    // dashboardNavigation,
    // signup,
    // signin,
    // logout,
    // restrict,
    // paddiLink,
    // paddiPay,
    // account,
    // forgotPassword,
    // verifyAccount,
    // transaction,
    // refunds,
    // settings,
    // withdraw,
    // customerSupport,
    // product,
    // orders,
  },
})
