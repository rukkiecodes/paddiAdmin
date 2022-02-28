import Vue from "vue"
import router from "../../router"

export default {
  state: {
    transactionFilters: [
      { title: "All" },
      { title: "Successful" },
      { title: "Pending" },
      { title: "Failed" },
    ],
    search: "",

    imageName: "",

    createTransactionDialog: false,

    createTransactionLoading: false,

    createTransactionCredential: {
      recipient_name: "",
      recipient_email: "",
      recipient_phone: "",
      transaction_type: "",
      price: "",
      quantity: "",
      role: "",
      description: "",
      image: "",
      duration: "",
    },

    updateTransactionCredential: {
      recipient_name: "",
      recipient_email: "",
      recipient_phone: "",
      transaction_type: "",
      price: "",
      quantity: "",
      role: "",
      description: "",
      image: "",
      duration: "",
    },

    transactions: [],

    viewDetailsDialoge: false,

    selectedTransaction: {},

    updateTransactionDialog: false,

    updateTransactionLoading: false,

    selectedTransactionToUpdate: {},

    approveTransactionDialog: false,

    approveTransactionLoading: false,

    selectedTransactionToApprove: [],

    selectedTransactionToConfirm: [],
    confirmTransactionDialog: false,
    confirmTransactionLoading: false,

    declineTransactionDialog: false,
    declineTransactionLoading: false,
    selectedTransactionToDecline: [],

    popTransactionDialog: false,
    popTransactionLoading: false,
    selectedTransactionToPop: [],

    deleteTransactionDialog: false,
    deleteTransactionLoading: false,
    selectedTransactionToDelete: [],

    pop: "",
    popName: "",

    delete: "",
    deleteName: "",
  },
  getters: {
    transactionFilters: (state) => state.transactionFilters,
    transactions: (state) => state.transactions,
    selectedTransactionToApprove: (state) => state.selectedTransactionToApprove,
    selectedTransactionToConfirm: (state) => state.selectedTransactionToConfirm,
    selectedTransactionToDecline: (state) => state.selectedTransactionToDecline,
    selectedTransactionToPop: (state) => state.selectedTransactionToPop,
    selectedTransactionToDelete: (state) => state.selectedTransactionToDelete,
  },

  mutations: {
    createTransaction: (state, response) => {
      console.log("created transaction: ", response)
      if (response.success == true) {
        state.createTransactionDialog = false
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        state.createTransactionDialog = false
        state.createTransactionLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    getTransactions: (state, response) => {
      state.transactions = []
      state.transactions.push(...response.data)
      console.log("getTransactions: ", state.transactions)
    },

    viewTransactionDetails: (state, transaction) => {
      console.log("view transaction details: ", transaction)
      state.selectedTransaction = transaction
      router.push("/dashboard/viewTransaction")
      state.viewDetailsDialoge = true
    },

    openUpdateTransactionDialog: (state, transaction) => {
      console.log("update: ", transaction)
      state.selectedTransactionToUpdate = transaction
      var number = transaction.recipientPhone
      var arr = number.split("4")
      arr.shift()
      number = arr.join("4")
      state.updateTransactionCredential = {
        recipient_name: transaction.recipientName,
        recipient_email: transaction.buyerEmail,
        recipient_phone: 0 + number,
        transaction_type: transaction.type,
        price: transaction.price,
        quantity: transaction.quantity,
        role: "",
        description: transaction.description,
        image: "",
        duration: transaction.duration,
      }
      state.updateTransactionDialog = true
    },

    updateTransaction: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.updateTransactionDialog = false
        state.updateTransactionLoading = false
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        state.updateTransactionDialog = false
        state.updateTransactionLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    openApprovalTransactionDialog: (state, transaction) => {
      console.log(transaction)
      state.selectedTransactionToApprove = []
      state.selectedTransactionToApprove.push(transaction)
      state.approveTransactionDialog = true
    },

    confirmApprove: (state, response) => {
      console.log(response)
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    openConfirmTransactionDialog: (state, transaction) => {
      console.log(transaction)
      state.selectedTransactionToConfirm = []
      state.selectedTransactionToConfirm.push(transaction)
      state.confirmTransactionDialog = true
    },

    confirmConfirm: (state, response) => {
      console.log(response)
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    openDeclineTransactionDialog: (state, transaction) => {
      console.log(transaction)
      state.selectedTransactionToDecline = []
      state.selectedTransactionToDecline.push(transaction)
      state.declineTransactionDialog = true
    },

    confirmDecline: (state, response) => {
      console.log(response)
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    openPopTransactionDialog: (state, transaction) => {
      console.log("pop transaction: ", transaction)
      state.selectedTransactionToPop = []
      state.selectedTransactionToPop.push(transaction)
      state.pop = transaction.pop
      state.popTransactionDialog = true
    },

    confirmPop: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.popTransactionDialog = false
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.pop[0],
        })
      }
    },

    openDeleteTransactionDialog: (state, transaction) => {
      console.log("delete transaction: ", transaction)
      state.selectedTransactionToDelete = []
      state.selectedTransactionToDelete.push(transaction)
      state.pop = transaction.pop
      state.deleteTransactionDialog = true
    },

    confirmDelete: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.popTransactionDialog = false
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.pop[0],
        })
      }
    },
  },

  actions: {
    setTransactionImage({ commit }, image) {
      this.state.transaction.imageName = ""
      this.state.transaction.imageName = image.name
      this.state.transaction.createTransactionCredential.image = image
      console.log(
        "state: ",
        this.state.transaction.createTransactionCredential.image
      )
    },

    createTransaction({ commit, dispatch }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      this.state.transaction.createTransactionLoading = true

      var myHeaders = new Headers()
      myHeaders.append("Accept", "multipart/form-data")
      myHeaders.append("Authorization", `Bearer ${token}`)

      let input = this.state.transaction.createTransactionCredential

      let formData = new FormData()
      formData.append("recipient_name", input.recipient_name)
      formData.append("recipient_email", input.recipient_email)
      formData.append("recipient_phone", input.recipient_phone)
      formData.append("transaction_type", input.transaction_type)
      formData.append("price", input.price)
      formData.append("quantity", input.quantity)
      formData.append("role", input.role)
      formData.append("description", input.description)
      formData.append("image", input.image)
      formData.append("duration", input.duration)

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      }

      fetch(
        process.env.NODE_ENV === "production"
          ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/transaction"
          : "/api/user/transaction",
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getTransactions").then(() => {
            this.state.transaction.createTransactionLoading = false
            commit("createTransaction", response)
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.transaction.createTransactionLoading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error!!!",
            text: error,
          })
        })
    },

    getTransactions({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      var options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }

      fetch(
        process.env.NODE_ENV === "production"
          ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/transactions"
          : "/api/user/transactions",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          commit("getTransactions", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },

    viewTransactionDetails({ commit }, transaction) {
      commit("viewTransactionDetails", transaction)
    },

    openUpdateTransactionDialog({ commit }, transaction) {
      commit("openUpdateTransactionDialog", transaction)
    },

    setUpdateTransactionImage({ commit }, image) {
      this.state.transaction.imageName = image.name
      this.state.transaction.updateTransactionCredential.image = image
      console.log("state: ", image)
    },

    updateTransaction({ commit, dispatch }) {
      let input = this.state.transaction.updateTransactionCredential
      let code = this.state.transaction.selectedTransactionToUpdate.code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      if (
        input.recipient_name != "" &&
        input.recipient_email != "" &&
        input.recipient_phone &&
        input.transaction_type != "" &&
        input.price != "" &&
        input.quantity != "" &&
        input.role != "" &&
        input.description != "" &&
        input.duration != ""
      ) {
        this.state.transaction.updateTransactionLoading = true

        let formData = new FormData()

        let myHeaders = new Headers()
        myHeaders.append("Accept", "multipart/form-data")
        myHeaders.append("Authorization", `Bearer ${token}`)

        formData.append("recipient_name", input.recipient_name)
        formData.append("recipient_email", input.recipient_email)
        formData.append("recipient_phone", input.recipient_phone)
        formData.append("transaction_type", input.transaction_type)
        formData.append("price", input.price)
        formData.append("quantity", input.quantity)
        formData.append("role", input.role)
        formData.append("description", input.description)
        if (input.image) formData.append("image", input.image)
        formData.append("duration", input.duration)

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formData,
          redirect: "follow",
          mode: "no-cors", // 'cors' by default
        }

        fetch(
          process.env.NODE_ENV === "production"
            ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/update-transaction/${code}`
            : `/api/user/update-transaction/${code}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getTransactions").then(() => {
              this.state.transaction.updateTransactionLoading = false
              commit("updateTransaction", response)
            })
          })
          .catch((error) => {
            console.log("Error: ", error)
            this.state.transaction.updateTransactionLoading = false
            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Error!!!",
              text: error,
            })
          })
      } else {
        this.state.transaction.updateTransactionLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    openApprovalTransactionDialog({ commit }, transaction) {
      commit("openApprovalTransactionDialog", transaction)
    },

    openConfirmTransactionDialog({ commit }, transaction) {
      commit("openConfirmTransactionDialog", transaction)
    },

    confirmApprove({ commit, dispatch }, transaction) {
      this.state.transaction.approveTransactionLoading = true
      let code = transaction.code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/approve-transaction/${code}`
          : `/api/user/approve-transaction/${code}`,
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
          return dispatch("getTransactions").then(() => {
            commit("confirmApprove", response)
            this.state.transaction.approveTransactionLoading = false
            this.state.transaction.approveTransactionDialog = false
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.transaction.approveTransactionLoading = false
        })
    },

    confirmConfirm({ commit, dispatch }, transaction) {
      this.state.transaction.confirmTransactionLoading = true
      let code = transaction.code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/confirm-transaction/${code}`
          : `/api/user/confirm-transaction/${code}`,
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
          return dispatch("getTransactions").then(() => {
            commit("confirmConfirm", response)
            this.state.transaction.confirmTransactionLoading = false
            this.state.transaction.confirmTransactionDialog = false
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.transaction.confirmTransactionLoading = false
        })
    },

    openDeclineTransactionDialog({ commit }, transaction) {
      commit("openDeclineTransactionDialog", transaction)
    },

    confirmDecline({ commit, dispatch }, transaction) {
      this.state.transaction.declineTransactionLoading = true
      let code = transaction.code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/decline-transaction/${code}`
          : `/api/user/decline-transaction/${code}`,
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
          return dispatch("getTransactions").then(() => {
            commit("confirmDecline", response)
            this.state.transaction.declineTransactionLoading = false
            this.state.transaction.declineTransactionDialog = false
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.transaction.declineTransactionLoading = false
        })
    },

    openPopTransactionDialog({ commit }, transaction) {
      commit("openPopTransactionDialog", transaction)
    },

    onPOPChange({ commit }, image) {
      this.state.transaction.pop = image
      this.state.transaction.popName = image.name
    },

    confirmPop({ commit, dispatch }, transaction) {
      const pop = this.state.transaction.pop
      console.log(pop)
      if (pop != "") {
        this.state.transaction.popTransactionLoading = true
        let code = transaction.code
        let token = Vue.prototype.$cookies.get("PaddiData").access_token

        let formData = new FormData()

        let myHeaders = new Headers()
        myHeaders.append("Accept", "multipart/form-data")
        myHeaders.append("Authorization", `Bearer ${token}`)

        formData.append("pop", pop)

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formData,
          redirect: "follow",
        }

        fetch(
          process.env.NODE_ENV === "production"
            ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/upload-pop/${code}`
            : `/api/user/upload-pop/${code}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getTransactions").then(() => {
              commit("confirmPop", response)
              this.state.transaction.popTransactionDialog = false
              this.state.transaction.popTransactionLoading = false
            })
          })
          .catch((error) => {
            console.log("Error: ", error)
            this.state.transaction.popTransactionLoading = false
          })
      } else {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    openDeleteTransactionDialog({ commit }, transaction) {
      commit("openDeleteTransactionDialog", transaction)
    },

    onDeleteChange({ commit }, image) {
      this.state.transaction.delete = image
      this.state.transaction.deleteName = image.name
    },

    confirmDelete({ commit, dispatch }, transaction) {
      const pop = this.state.transaction.pop
      console.log(pop)
      if (pop != "") {
        this.state.transaction.deleteTransactionLoading = true
        let code = transaction.code
        console.log(code)
        let token = Vue.prototype.$cookies.get("PaddiData").access_token

        let formData = new FormData()

        let myHeaders = new Headers()
        myHeaders.append("Accept", "multipart/form-data")
        myHeaders.append("Authorization", `Bearer ${token}`)

        formData.append("pop", pop)

        let requestOptions = {
          method: "DELETE",
          headers: myHeaders,
          body: formData,
          redirect: "follow",
        }

        fetch(
          process.env.NODE_ENV === "production"
            ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/transaction/${code}`
            : `/api/user/transaction/${code}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getTransactions").then(() => {
              commit("confirmDelete", response)
              this.state.transaction.deleteTransactionDialog = false
              this.state.transaction.deleteTransactionLoading = false
            })
          })
          .catch((error) => {
            console.log("Error: ", error)
            this.state.transaction.deleteTransactionLoading = false
          })
      } else {
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
