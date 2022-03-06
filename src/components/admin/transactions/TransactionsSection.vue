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
    <div>
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
              <th class="text-left">Id</th>
              <th class="text-left">Price</th>
              <th class="text-left">Status</th>
              <th class="text-left">Type</th>
              <th width="150" class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in desserts" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.earings }}</td>
              <td>
                <v-btn>hello</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination v-model="page" :length="4"></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionCard from "./TransactionCard.vue";
export default {
  components: { TransactionCard },
  data() {
    return {
      page: 1,
      data: [
        {
          title: "Total transaction",
          count: "1,000",
          img: require("../../../assets/img1.png"),
        },
        {
          title: "Approved transaction",
          count: "800",
          img: require("../../../assets/img2.png"),
        },
        {
          title: "Rejeted transaction",
          count: "200",
          img: require("../../../assets/img3.png"),
        },
      ],
      desserts: [
        {
          name: "TP78768",
          email: "1,095",
          status: "active",
          earings: "product",
        },
        {
          name: "TP78768",
          email: "1,095",
          status: "active",
          earings: "product",
        },
        {
          name: "TP78768",
          email: "1,095",
          status: "active",
          earings: "product",
        },
      ],
    };
  },
};
</script>