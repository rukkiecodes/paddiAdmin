export default {
  state: {
    steps: 1,
    clientServicesInputs: {
      name: "",
      clientsMobileNumber: "",
      availableServices: "",
      transactionDuration: "",
      agreedAmount: "",
      whenToPay: "",
      termsOfContract: ""
    },
  },
  mutations: {
    toclientServicesClientsMobileNumber: (state) => {
      if (state.clientServicesInputs.name != "") {
        state.steps = 2;
      } else {
        state.steps = 1;
      }
    },
    toclientServicesAvailableServicesr: (state) => {
      if (state.clientServicesInputs.clientsMobileNumber != "") {
        state.steps = 3;
      } else {
        state.steps = 2;
      }
    },
    toclientServicesTransactionDuration: (state) => {
      if (state.clientServicesInputs.availableServices != "") {
        state.steps = 4;
      } else {
        state.steps = 3;
      }
    },
    toclientServicesAgreedAmount: (state) => {
      if (state.clientServicesInputs.transactionDuration != "") {
        state.steps = 5;
      } else {
        state.steps = 4;
      }
    },
    toclientServicesWhenToPay: (state) => {
      if (state.clientServicesInputs.agreedAmount != "") {
        state.steps = 6;
      } else {
        state.steps = 5;
      }
    },
    toclientServicesTermsOfContract: (state) => {
      if (state.clientServicesInputs.whenToPay != "") {
        state.steps = 7;
      } else {
        state.steps = 6;
      }
    },
  },
  actions: {
    toclientServicesClientsMobileNumber({ commit }) {
      commit("toclientServicesClientsMobileNumber");
    },
    toclientServicesAvailableServicesr({ commit }) {
      commit("toclientServicesAvailableServicesr");
    },
    toclientServicesTransactionDuration({ commit }) {
      commit("toclientServicesTransactionDuration");
    },
    toclientServicesAgreedAmount({ commit }) {
      commit("toclientServicesAgreedAmount");
    },
    toclientServicesWhenToPay({ commit }) {
      commit("toclientServicesWhenToPay");
    },
    toclientServicesTermsOfContract({ commit }) {
      commit("toclientServicesTermsOfContract");
    },
  },
};
