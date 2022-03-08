<template>
  <div>
    <v-row class="my-5">
      <v-col
        v-for="(item, index) in data"
        :key="index"
        class="m-5"
        cols="12"
        md="5"
        lg="4"
      >
        <TransactionCard :item="item" />
      </v-col>
    </v-row>
    <v-form>
      <v-text-field
        solo
        filled
        label="Search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-form>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Withdrawal ID</th>
            <th class="text-left">Email</th>
            <th class="text-left">Anount</th>
            <th width="150" class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in desserts" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.status }}</td>
            <td>
              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center">
      <v-pagination v-model="page" :length="4"></v-pagination>
    </div>
  </div>
</template>
<script>
import TransactionCard from "../transactions/TransactionCard.vue";
export default {
  components: {
    TransactionCard,
  },
  name: "WithdrawalSection",
  data() {
    return {
      page: 1,
      data: [
        {
          title: "All time total withdrawals",
          count: "1,000",
          img: require("../../../assets/img1.png"),
        },
        {
          title: "Total withdrawal for the month",
          count: "800",
          img: require("../../../assets/img2.png"),
        },
        {
          title: "Total withdrawal for today",
          count: "200",
          img: require("../../../assets/img3.png"),
        },
      ],
      desserts: [
        {
          name: "UU377378783",
          email: "email@gmail.com",
          status: 800,
        },
        {
          name: "Frozen Yogurt",
          email: "email@gmail.com",
          status: 8778,
        },
        {
          name: "Frozen Yogurt",
          email: "email@gmail.com",
          status: 7677,
        },
      ],
    };
  },
};
</script>