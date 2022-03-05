<template>
  <v-card class="mx-auto" height="100%" width="256">
    <v-navigation-drawer class="deep-purple darken-5" dark permanent>
      <v-list>
        <v-list-item-avatar class="d-flex mx-auto my-5">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template> -->
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Users", icon: "mdi-account-group" },
        { title: "Transactions", icon: "mdi-account-cash" },
        { title: "Disputes", icon: "mdi-gavel" },
        { title: "Stores", icon: "mdi-cart" },
        { title: "Withdrawals", icon: "mdi-cash-fast" },
      ],
    };
  },
};
</script>
