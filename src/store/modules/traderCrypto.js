export default {
  state: {
    steps: 1,
    traderCryptoInputs: {
      email: "",
      phone: "",
      currency: "",
      agreedAmount: "",
      price: "",
      duration: "",
    },
  },
  mutations: {
    totraderCryptoProductPhone: (state) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.traderCryptoInputs.email.match(emailRegex)) {
        state.steps = 2;
      } else {
        state.steps = 1;
      }
    },
    totraderCryptoProductCurrency: (state) => {
      if (state.traderCryptoInputs.phone != "") {
        state.steps = 3;
      } else {
        state.steps = 2;
      }
    },
    totraderCryptoProductAgreedAmount: (state) => {
      if (state.traderCryptoInputs.currency != "") {
        state.steps = 4;
      } else {
        state.steps = 3;
      }
    },
    totraderCryptoProductPrice: (state) => {
      if (state.traderCryptoInputs.agreedAmount != "") {
        state.steps = 5;
      } else {
        state.steps = 4;
      }
    },
    totraderCryptoProductDuration: (state) => {
      if (state.traderCryptoInputs.price != "") {
        state.steps = 6;
      } else {
        state.steps = 5;
      }
    },
  },
  actions: {
    totraderCryptoProductPhone({ commit }) {
      commit("totraderCryptoProductPhone");
    },
    totraderCryptoProductCurrency({ commit }) {
      commit("totraderCryptoProductCurrency");
    },
    totraderCryptoProductAgreedAmount({ commit }) {
      commit("totraderCryptoProductAgreedAmount");
    },
    totraderCryptoProductPrice({ commit }) {
      commit("totraderCryptoProductPrice");
    },
    totraderCryptoProductDuration({ commit }) {
      commit("totraderCryptoProductDuration");
    },
  },
};
