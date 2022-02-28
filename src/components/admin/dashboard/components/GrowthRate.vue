<template>
  <v-card flat class="growthCard rounded-lg">
    <v-card-title>Growth Rate</v-card-title>
    <v-row justify="space-between" align="center" no-gutters>
      <v-col cols="12" lg="8">
        <div id="growthChart"></div>
      </v-col>
      <v-col cols="12" sm="6" md="8" lg="4">
        <v-card-text>
          <p class="text-h6">Total</p>
          <p class="text-h4">$49000</p>
          <p class="text-body-2 font-weight-light grey--text text--darken-2">
            Income Top the Last Week
          </p>

          <v-row class="mb-4" no-gutters justify="space-between" align="end">
            <v-col cols="6">
              <div id="iq-chart-boxleft"></div>
            </v-col>
            <v-col cols="6" class="ml-n2">
              <div id="iq-chart-boxright"></div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="10">
              <p
                class="text-body-2 font-weight-light grey--text text--darken-2"
              >
                Successful Deals
              </p>
            </v-col>
            <v-col cols="2">
              <span class="font-weight-bold grey--text text--darken-3"
                >78%</span
              >
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="10">
              <p
                class="text-body-2 font-weight-light grey--text text--darken-2"
              >
                Failed Deals
              </p>
            </v-col>
            <v-col cols="2">
              <span class="font-weight-bold grey--text text--darken-3"
                >12%</span
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ApexCharts from "apexcharts"
export default {
  data: () => ({
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),

  mounted() {
    this.$nextTick(() => {
      const options = {
        series: [
          {
            name: "Successful deals",
            data: [30, 50, 35, 60, 40, 60, 60],
          },
          {
            name: "Failed deals",
            data: [40, 50, 55, 50, 30, 80, 30],
          },
        ],
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
        },
        colors: ["#1e3d73", "#fe517e"],

        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "15%",
            endingShape: "rounded",
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
        },
        yaxis: {
          title: {
            text: "",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            },
          },
        },
      }

      let chart = new ApexCharts(
        document.querySelector("#growthChart"),
        options
      )
      chart.render()

      // FOR SIDE CHARTS
      const options2 = {
        series: [
          {
            name: "Success",
            data: [10, 10, 35, 10],
          },
        ],
        colors: ["#1e3d73"],
        chart: {
          height: 50,
          width: 100,
          type: "line",
          sparkline: {
            enabled: true,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar"],
        },
      }

      let chart2 = new ApexCharts(
        document.querySelector("#iq-chart-boxleft"),
        options2
      )
      chart2.render()

      if (document.querySelectorAll("#iq-chart-boxright").length) {
        const options3 = {
          series: [
            {
              name: "Failed",
              data: [10, 10, 35],
            },
          ],
          colors: ["#fe517e"],
          chart: {
            height: 50,
            width: 100,
            type: "line",
            sparkline: {
              enabled: true,
            },
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar"],
          },
        }

        let chart3 = new ApexCharts(
          document.querySelector("#iq-chart-boxright"),
          options3
        )
        chart3.render()
      }
    })
  },
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.growthCard {
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1) !important;
}
</style>
