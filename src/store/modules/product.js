import Vue from "vue"
import router from "../../router"

export default {
  state: {
    imageName: "",

    createProductDialog: false,
    createProductLoading: false,

    createProductCredential: {
      name: "",
      description: "",
      quantity: "",
      price: "",
      image: "",
    },

    editProductCredential: {
      name: "",
      description: "",
      quantity: "",
      price: "",
      image: "",
    },

    products: [],

    viewDetailsDialoge: false,
    selectedTransaction: {},

    editProductDialog: false,

    editProductLoading: false,

    selectedProductToEdit: {},
  },
  
  getters: {
    products: (state) => state.products,
  },

  mutations: {
    createProduct: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.createProductDialog = false
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
        state.createProductLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    getProducts: (state, response) => {
      state.products = []
      let productData = response.data
      for (let i = 0; i < productData.length; i++) {
        state.products.push(productData[i])
      }
      console.log("getProducts: ", state.products)
    },

    viewProductDetails: (state, product) => {
      console.log("view transaction details: ", product)
      state.selectedTransaction = product
      router.push("/dashboard/viewProducts")
      state.viewDetailsDialoge = true
    },

    openEditProductDialog: (state, product) => {
      console.log("update: ", product)

      state.selectedProductToEdit = product

      state.editProductCredential = {
        name: product.name,
        description: product.description,
        quantity: product.quantity,
        price: product.initialPrice,
        image: "",
      }
      state.editProductDialog = true
    },

    editProduct: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.editProductDialog = false
        state.editProductLoading = false
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
        state.editProductDialog = false
        state.editProductLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },
  },

  actions: {
    setProductImage({ commit }, image) {
      this.state.product.imageName = image.name
      this.state.product.createProductCredential.image = image
      console.log("state: ", this.state.product.createProductCredential.image)
    },

    async createProduct({ commit, dispatch }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      this.state.product.createProductLoading = true

      let formData = new FormData()

      let myHeaders = new Headers()
      myHeaders.append("Accept", "multipart/form-data")
      myHeaders.append("Authorization", `Bearer ${token}`)

      formData.append("name", this.state.product.createProductCredential.name)
      formData.append(
        "description",
        this.state.product.createProductCredential.description
      )
      formData.append(
        "quantity",
        this.state.product.createProductCredential.quantity
      )
      formData.append("price", this.state.product.createProductCredential.price)
      formData.append("image", this.state.product.createProductCredential.image)

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      }

      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/product`
          : `/api/user/product`,
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getProducts").then(() => {
            this.state.product.createProductLoading = false
            commit("createProduct", response)
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.product.createProductLoading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error!!!",
            text: error,
          })
        })
    },

    async getProducts({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(
        process.env.NODE_ENV === "production"
          ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/products`
          : `/api/user/products`,
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
          commit("getProducts", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },

    viewProductDetails({ commit }, product) {
      commit("viewProductDetails", product)
    },

    openEditProductDialog({ commit }, product) {
      commit("openEditProductDialog", product)
    },

    setEditProductImage({ commit }, image) {
      this.state.product.imageName = image.name
      this.state.product.editProductCredential.image = image
      console.log("state: ", image)
    },

    async editProduct({ commit, dispatch }) {
      let input = this.state.product.editProductCredential
      let slug = this.state.product.selectedProductToEdit.slug
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      if (
        input.name != "" &&
        input.description != "" &&
        input.quantity &&
        input.price != "" &&
        input.image != ""
      ) {
        this.state.product.editProductLoading = true

        let formData = new FormData()

        let myHeaders = new Headers()
        myHeaders.append("Accept", "multipart/form-data")
        myHeaders.append("Authorization", `Bearer ${token}`)

        formData.append("name", input.name)
        formData.append("description", input.description)
        formData.append("quantity", input.quantity)
        formData.append("price", input.price)
        formData.append("image", input.image)

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formData,
        }

        fetch(
          process.env.NODE_ENV === "production"
            ? `https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/product/${slug}`
            : `/api/user/product/${slug}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getProducts").then(() => {
              this.state.product.editProductLoading = false
              commit("editProduct", response)
            })
          })
          .catch((error) => {
            console.log("Error: ", error)
            this.state.product.editProductLoading = false
            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Error!!!",
              text: error,
            })
          })
      } else {
        this.state.transaction.editProductLoading = false
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
