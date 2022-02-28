<template>
  <v-card class="usersList rounded-lg mt-6">
    <v-card-title>Users</v-card-title>
    <v-list>
      <v-list-item v-for="(user, i) in users" :key="i" two-line>
        <v-list-item-avatar>
          <v-img :src="user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-4 text-body-2"
            >{{ user.name }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action-text
          class="grey--text text--darken-3 font-weight-bold text-body-2"
          >{{ user.revenue }}</v-list-item-action-text
        >
      </v-list-item>
    </v-list>

    <v-card-actions>
      <v-btn color="deep-purple accent-4" class="text-capitalize" block dark depressed>View more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    users: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "John Doe",
        email: "user1@gmail.com",
        revenue: "$10.00",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        name: "John Doe",
        email: "user1@gmail.com",
        revenue: "$10.00",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        name: "John Doe",
        email: "user1@gmail.com",
        revenue: "$10.00",
      },
    ]
  })
}
</script>

<style scoped>
.usersList {
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1) !important;
}
</style>
