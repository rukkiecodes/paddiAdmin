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
          <v-list-item @click="showStoresCreated">
            <v-list-item-title>Stores created</v-list-item-title>
          </v-list-item>
          <v-list-item @click="showPaddiLinks">
            <v-list-item-title>Paddi links</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-text>
      <donut-chart
        id="donut"
        :data="donutData"
        colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
        resize="true"
        v-show="storesCreated == true"
      ></donut-chart>
      <donut-chart
        id="donut2"
        style="margin-left: -6.3em"
        :data="donutData"
        colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
        resize="true"
        v-show="paddiLink == true"
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
    storesCreated: true,
    paddiLink: false,
    title: "Stores created",
    donutData: [
      { label: "In-Store Sales", value: 30 },
      { label: "Download Sales", value: 12 },
      { label: "Mail-Order Sales", value: 20 },
    ],
  }),

  components: {
    DonutChart,
  },

  mounted() {
    this.$nextTick(() => {})
  },

  methods: {
    showStoresCreated() {
      this.storesCreated = true
      this.paddiLink = false
      this.title = "Stores created"
    },
    showPaddiLinks() {
      this.storesCreated = false
      this.paddiLink = true
      this.title = "Paddi link"
    },
  },
}
</script>

<style scoped>
.storesCreadedCard {
  box-shadow: 0px 0px 20px 0px rgba(5, 16, 26, 0.1) !important;
}
</style>
