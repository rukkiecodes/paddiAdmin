<template>
  <v-card class="transactionDetailes rounded-lg" flat>
    <v-card-text>
      <v-card
        flat
        class="mb-13 transactionDetailesCards"
        v-for="(transaction, i) in transactionDetailes"
        :key="i"
      >
        <v-row no-gutters align="center">
          <v-col cols="3">
            <v-avatar
              :color="transaction.lightColor"
              size="60"
              class="rounded-lg"
              rounded
            >
              <v-icon :color="transaction.color" size="34">{{
                transaction.icon
              }}</v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="9">
            <v-row no-gutters justify="space-between" align="center">
              <v-col cols="10" class="d-flex justify-start">
                <span class="grey--text text--darken-4 text-body-2">{{
                  transaction.title
                }}</span>
              </v-col>
              <v-col class="d-flex justify-end">
                <span
                  class="grey--text text--darken-3 text-body-2 font-weight-bold"
                  >{{ transaction.amount }}</span
                >
              </v-col>
            </v-row>
            <v-row no-gutters justify="space-between" align="center">
              <v-col cols="12" class="d-flex justify-start">
                <v-slider
                  v-model="transaction.sliderValue"
                  thumb-color="transparent"
                  height="20"
                  track-color="#FAFAFB"
                  :color="transaction.color"
                  step="1"
                  readonly
                  hide-details
                  dense
                ></v-slider>
              </v-col>
            </v-row>
            <v-row no-gutters justify="space-between" align="center">
              <v-col cols="10" class="d-flex justify-start">
                <span
                  class="grey--text text--darken-2 text-body-2 font-weight-light"
                  >{{ transaction.transactionsCount }} Transaction</span
                >
              </v-col>
              <v-col class="d-flex justify-end">
                <span
                  class="grey--text text--darken-2 text-body-2 font-weight-light"
                  >{{ transaction.sliderValue }}%</span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: 10,

    transactionDetailes: [
      {
        icon: "mdi-bank-transfer",
        title: "Successful Transactions",
        amount: "$620",
        sliderValue: "67",
        transactionsCount: "45",
        color: "#65F9B3",
        lightColor: "#ECFFF6",
      },
      {
        icon: "mdi-bank-transfer",
        title: "Ongoing Transactions",
        amount: "$230",
        sliderValue: "32",
        transactionsCount: "38",
        color: "#FFBF43",
        lightColor: "#FEFAEE",
      },
      {
        icon: "mdi-bank-transfer",
        title: "Pending Transaction",
        amount: "$110",
        sliderValue: "60",
        transactionsCount: "50",
        color: "#9267FF",
        lightColor: "#F4F0FF",
      },
      {
        icon: "mdi-bank-transfer",
        title: "Failed Transactions",
        amount: "$620",
        sliderValue: "67",
        transactionsCount: "45",
        color: "#FE517E",
        lightColor: "#FFEEEE",
      },
    ],
  }),

  mounted() {
    this.$nextTick(() => {
      const sliders = document.querySelectorAll(
        ".transactionDetailes .v-slider--horizontal .v-slider__track-container"
      )
      if (sliders) {
        sliders.forEach((el) => {
          el.style.height = "6px"
        })
      }
    })
  },
}
</script>

<style scoped>
.transactionDetailes {
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1) !important;
}

.transactionDetailesCards:last-child {
  margin-bottom: 0 !important;
}
</style>
