<template>
  <!-- <v-card class="mx-auto" height="100%" width="256"> -->
  <v-navigation-drawer
    v-model="sidebar"
    class="blue darken-3"
    dark
    parmanent
    app
  >
    <v-list>
      <v-list-item-avatar width="100" height="100" class="d-flex mx-auto my-5">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
      </v-list-item-avatar>
      <router-link
        v-for="item in items"
        :key="item.title"
        :to="item.link"
        class="d-flex"
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>

    <!-- <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template> -->
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
export default {
  props: {
    sidebar: Boolean,
  },
  data() {
    return {
      // sidebar: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
        { title: "Users", icon: "mdi-account-group", link: "/users" },
        {
          title: "Transactions",
          icon: "mdi-account-cash",
          link: "/transactions",
        },
        { title: "Disputes", icon: "mdi-gavel", link: "/disputes" },
        { title: "Stores", icon: "mdi-cart", link: "/" },
        { title: "Withdrawals", icon: "mdi-cash-fast", link: "/withdrawal" },
        { title: "Logout", icon: "mdi-logout", link: "/" },
      ],
    };
  },
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}
</style>