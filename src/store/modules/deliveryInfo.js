export default {
  state: {
    steps: 1,
    deliveryInfoInputs: {
      name: "",
      size: "",
      sizeMesurmentUnit: "",
      productImage: [],
      residentialAddress: "",
      stateOfResidence: "",
    },
  },
  mutations: {
    toDeliveryInfoProductSize: (state) => {
      if (state.deliveryInfoInputs.name != "") {
        state.steps = 2;
      } else {
        state.steps = 1;
      }
    },
    toDeliveryInfoProductImage: (state) => {
      if (state.deliveryInfoInputs.size != "") {
        state.steps = 3;
      } else {
        state.steps = 2;
      }
    },
    toDeliveryInfoProductResidentialAddress: (state) => {
      if (state.deliveryInfoInputs.productImage.length != 0) {
        state.steps = 4;
      } else {
        state.steps = 3;
      }
    },
    toDeliveryInfoProductStateOfResidence: (state) => {
      if (state.deliveryInfoInputs.residentialAddress != "") {
        state.steps = 5;
      } else {
        state.steps = 4;
      }
    },
  },
  actions: {
    toDeliveryInfoProductSize({ commit }) {
      commit("toDeliveryInfoProductSize");
    },
    toDeliveryInfoProductImage({ commit }) {
      commit("toDeliveryInfoProductImage");
    },
    toDeliveryInfoProductResidentialAddress({ commit }) {
      commit("toDeliveryInfoProductResidentialAddress");
    },
    toDeliveryInfoProductStateOfResidence({ commit }) {
      commit("toDeliveryInfoProductStateOfResidence");
    },
  },
};
