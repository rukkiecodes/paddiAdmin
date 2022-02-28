export default {
  state: {
    steps: 1,
    goodAndProductBuyerInputs: {
      email: "",
      phone: "",
      name: "",
      price: "",
      description: "",
      condition: "",
      handleDelivery: ""
    },
  },
  mutations: {
    toGoodAndProductBuyerPhone: (state) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.goodAndProductBuyerInputs.email.match(emailRegex)) {
        state.steps = 2;
      } else {
        state.steps = 1;
      }
    },
    toGoodAndProductBuyerName: (state) => {
      if (state.goodAndProductBuyerInputs.phone != "") {
        state.steps = 3;
      } else {
        state.steps = 2;
      }
    },
    toGoodAndProductBuyerPrice: (state) => {
      if (state.goodAndProductBuyerInputs.name != "") {
        state.steps = 4;
      } else {
        state.steps = 3;
      }
    },
    toGoodAndProductBuyerDescription: (state) => {
      if (state.goodAndProductBuyerInputs.price != "") {
        state.steps = 5;
      } else {
        state.steps = 4;
      }
    },
    toGoodAndProductBuyerCondition: (state) => {
      if (state.goodAndProductBuyerInputs.description != "") {
        state.steps = 6;
      } else {
        state.steps = 5;
      }
    },
    toGoodAndProductBuyerHandleDelivery: (state) => {
      if (state.goodAndProductBuyerInputs.condition != "") {
        state.steps = 7;
      } else {
        state.steps = 6;
      }
    },
  },
  actions: {
    toGoodAndProductBuyerPhone({ commit }) {
      commit("toGoodAndProductBuyerPhone");
    },
    toGoodAndProductBuyerName({ commit }) {
      commit("toGoodAndProductBuyerName");
    },
    toGoodAndProductBuyerPrice({ commit }) {
      commit("toGoodAndProductBuyerPrice");
    },
    toGoodAndProductBuyerDescription({ commit }) {
      commit("toGoodAndProductBuyerDescription");
    },
    toGoodAndProductBuyerCondition({ commit }) {
      commit("toGoodAndProductBuyerCondition");
    },
    toGoodAndProductBuyerHandleDelivery({ commit }) {
      commit("toGoodAndProductBuyerHandleDelivery");
    },
  },
};
