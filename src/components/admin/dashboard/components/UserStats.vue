<template>
  <v-card class="storesCreadedCard rounded-lg">
    <v-card-title>
      {{ title }}
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="deep-purple accent-4" dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item @click="showNumberOfUsers">
            <v-list-item-title>Number of users</v-list-item-title>
          </v-list-item>
          <v-list-item @click="showUserPercentagess">
            <v-list-item-title>User percentagess</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-text>
      <donut-chart
        id="donut3"
        :data="donutData"
        colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
        resize="true"
        v-show="NumberOfUsers == true"
      ></donut-chart>
      <donut-chart
        id="donut4"
        style="margin-left: -6.3em"
        :data="userPercentageData"
        colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
        resize="true"
        v-show="userPercentages == true"
      ></donut-chart>
    </v-card-text>
  </v-card>
</template>

<script>
// @ts-nocheck
import Raphael from "raphael/raphael"
global.Raphael = Raphael
import { DonutChart } from "vue-morris"
export default {
  data: () => ({
    NumberOfUsers: true,
    userPercentages: false,
    title: "Number of users",
    donutData: [
      { label: "In-Store Sales", value: 30 },
      { label: "Download Sales", value: 12 },
      { label: "Mail-Order Sales", value: 20 },
    ],
    userPercentageData: [
      { label: "Amount of sellers", value: 30 },
      { label: "Sellers and buyers", value: 50 },
      { label: "Amount of buyers", value: 20 },
    ],
  }),

  components: {
    DonutChart,
  },

  mounted() {
    this.$nextTick(() => {})
  },

  methods: {
    showNumberOfUsers() {
      this.NumberOfUsers = true
      this.userPercentages = false
      this.title = "Number of users"
    },
    showUserPercentagess() {
      this.NumberOfUsers = false
      this.userPercentages = true
      this.title = "User percentages"
    },
  },
}
</script>

<style scoped>
.storesCreadedCard {
  box-shadow: 0px 0px 20px 0px rgba(5, 16, 26, 0.1) !important;
}
</style>
