export default {
  state: {
    dialog: false,
    editDialog: false,
    paddiLinkInputs: {
      id: "12695juf",
      title: "",
      price: "",
      description: "",
      dateCreated: "2021-10-21",
      image: null,
    },
    paddiLinks: [],
    createMode: true,
    editMode: false,
  },

  getters: {
    paddiLinks: (state) => state.paddiLinks,
  },

  mutations: {
    createPaddiLink: (state) => {
      if (
        state.paddiLinkInputs.title &&
        state.paddiLinkInputs.price &&
        state.paddiLinkInputs.description &&
        state.paddiLinkInputs.image
      ) {
        state.paddiLinks.push(state.paddiLinkInputs)
        state.paddiLinkInputs = {
          title: "",
          price: "",
          description: "",
          image: null,
        }
        state.dialog = false
      }
    },

    editPaddiLink: (state, link) => {
      state.createMode = false
      state.editMode = true
      state.editDialog = true
      state.paddiLinkInputs = link
      console.log(link)
      return state
    },
  },

  actions: {
    createPaddiLink({ commit }) {
      commit("createPaddiLink")
    },
    editPaddiLink({ commit }, link) {
      commit("editPaddiLink", link)
    },
  },
}
