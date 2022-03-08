<template>
  <nav>
    <v-app-bar app flat color="#F8F8FB">
      <v-app-bar-nav-icon @click="toggleSidebar()"></v-app-bar-nav-icon>
      <v-toolbar-title>TrustPaddi Admin</v-toolbar-title>
      <v-spacer />
      <v-badge color="red" dot overlap>
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  props:{
    toggleSidebar: Function
  }
};
</script>
