import Vue from "vue"

export default {
  state: {
    customerDialog: false,

    createLoading: false,

    search: "",

    createTicketCredential: {
      subject: "",
      description: "",
      department: "",
      file: "",
    },

    ticketFilters: [
      { title: "All" },
      { title: "pending" },
      { title: "successful" },
    ],

    tickets: [],

    file: "",

    fileName: "",

    viewDialog: false,

    viewTicket: {},

    viewSingleTicketDialog: false,

    confirmDeleteDialog: false,

    selectedTicketToDelete: [],

    deleteLoading: false,
  },

  getters: {
    ticketFilters: (state) => state.ticketFilters,
    tickets: (state) => state.tickets,
    selectedTicketToDelete: (state) => state.selectedTicketToDelete,
  },

  mutations: {
    createTicket: (state, response) => {
      console.log(response)
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
      if (response.success == true) {
        state.customerDialog = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-user"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },

    getTickets: (state, response) => {
      state.tickets = []
      let bankData = response.data
      for (let i = 0; i < bankData.length; i++) {
        state.tickets.push(bankData[i])
      }
      console.log("Tickets: ", state.tickets)
    },

    viewTicket: (state, ticket) => {
      state.viewDialog = true
      state.viewTicket = ticket
    },

    viewSingleTicket: (state, response) => {
      if (response.success) {
        state.viewSingleTicketDialog = true
        state.viewTicket = response.data
      }
    },

    deleteSingleTicket: (state, ticket) => {
      console.log(ticket)
      state.confirmDeleteDialog = true
      state.selectedTicketToDelete = []
      state.selectedTicketToDelete.push(ticket)
    },

    confirmDelete: (state, response) => {
      if (response.success) {
        state.confirmDeleteDialog = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-trash-alt"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },

    confirmDelete: (state, response) => {
      if (response.success) {
        Vue.prototype.$vs.notification({
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },

    closeSingleTicket: (state, response) => {
      if (response.success) {
        Vue.prototype.$vs.notification({
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },
  },

  actions: {
    createTicket({ commit }) {
      if (
        this.state.customerSupport.createTicketCredential.subject != "" &&
        this.state.customerSupport.createTicketCredential.description != "" &&
        this.state.customerSupport.createTicketCredential.department != ""
      ) {
        this.state.customerSupport.createLoading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token

        let formData = new FormData()

        let myHeaders = new Headers()
        myHeaders.append("Accept", "multipart/form-data")
        myHeaders.append("Authorization", `Bearer ${token}`)

        formData.append(
          "subject",
          this.state.customerSupport.createTicketCredential.subject
        )
        formData.append(
          "description",
          this.state.customerSupport.createTicketCredential.description
        )
        formData.append(
          "department",
          this.state.customerSupport.createTicketCredential.department
        )
        formData.append(
          "file",
          this.state.customerSupport.createTicketCredential.file
        )

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formData,
        }

        fetch(
          process.env.NODE_ENV === "production"
            ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/ticket`
            : `/api/user/ticket`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            commit("createTicket", response)
            this.state.customerSupport.createLoading = false
          })
          .catch((error) => {
            console.log("Error: ", error)
            this.state.customerSupport.createLoading = false
            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Error!!!",
              text: `Update error. Check your details the try again.`,
            })
          })
      } else {
        this.state.customerSupport.createLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    setImage({ commit }, file) {
      if (file) {
        this.state.customerSupport.createTicketCredential.file = file
        this.state.customerSupport.fileName = file.name
      }
    },

    getTickets({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/tickets"
          : "/api/user/tickets",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          commit("getTickets", response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    viewTicket({ commit }, ticket) {
      commit("viewTicket", ticket)
    },

    viewSingleTicket({ commit }, ticket) {
      let id = ticket.unique_code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/ticket/${id}`
          : `/api/user/ticket/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          commit("viewSingleTicket", response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    deleteSingleTicket({ commit }, ticket) {
      commit("deleteSingleTicket", ticket)
    },

    confirmDelete({ commit, dispatch }, ticket) {
      this.state.customerSupport.deleteLoading = true
      let id = ticket.unique_code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/ticket/${id}`
          : `/api/user/ticket/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getTickets").then(() => {
            commit("confirmDelete", response)
            this.state.customerSupport.deleteLoading = false
          })
        })
        .catch((error) => {
          console.log(error)
          this.state.customerSupport.deleteLoading = false
        })
    },

    closeSingleTicket({ commit, dispatch }, ticket) {
      let id = ticket.unique_code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/close-ticket/${id}`
          : `/api/user/close-ticket/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getTickets").then(() => {
            commit("closeSingleTicket", response)
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
