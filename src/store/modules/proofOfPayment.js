export default {
  state: {
    steps: 1,
    ProofOfPaymentInputs: {
      screenshot: [],
      otherProof: [],
    },
  },
  mutations: {
    toproofOfPaymentOtherProof: (state) => {
      if (state.ProofOfPaymentInputs.screenshot.length != 0) {
        state.steps = 2;
      } else {
        state.steps = 1;
      }
    },
  },
  actions: {
    toproofOfPaymentOtherProof({ commit }) {
      commit("toproofOfPaymentOtherProof");
    },
  },
};
